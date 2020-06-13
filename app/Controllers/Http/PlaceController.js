'use strict'
const fetch = require("node-fetch");
const Place = use('App/Models/Place')
const Database = use('Database')
class PlaceController {
  async index ({ request, response, view }) {
    return Place.all()
  }

  async store ({ request, response }) {
    const data = request.only(['name', 'googleId', 'query', 'image', 'type']);
    return Place.create(data)
  }

  async show ({ params, request, response, view }) {
    return Place.findOrFail(params.id)
  }

  async destroy ({ params, request, response }) {
    const place = await Place.findOrFail(params.id)
    await place.delete()
  }

  async fetchPlaces({ params, request, response }) {
    const count = await Database
      .from('places')
      .where('query',  params.query)
      .count()
    const total = count[0]['count']
    if(total < 1) {
      const places = await this.fetchMaps(params.query)
      await places.results.map(async place => {
        const data = {name: place.name, googleId: place.id, query: params.query, image: place.photos[0].photo_reference, type: 'restaurant'}
        await Place.create(data)
      })
    }
    return Place
      .query()
      .with('rating')
      .where('query', '=', params.query)
      .fetch()
  }
  async fetchMaps(road) {
    const key = process.env.MAPS_API
    const response = await
      fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurantes na rodovia ${road}&key=${key}`);
    return await response.json()
  }
}

module.exports = PlaceController

