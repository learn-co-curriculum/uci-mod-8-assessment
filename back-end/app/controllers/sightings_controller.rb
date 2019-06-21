class SightingsController < ApplicationController
  def index
    sightings = Sighting.all
    render json: sightings.to_json(:include => {:bird => {:only =>[:name, :species, :image_url]}, :location => {:only =>[:latitude, :longitude]}}, :except => [:updated_at])
  end

  def show
    sighting = Sighting.find(params[:id])
    render json: sighting.to_json(:include => {:bird => {:only =>[:name, :species, :image_url]}, :location => {:only =>[:latitude, :longitude]}}, :except => [:updated_at])
  end

  def create
    bird =  Bird.find_by(name: sighting_params[:birdName])
    location = Location.find_or_create_by(latitude: sighting_params[:latitude], longitude: sighting_params[:longitude])

    sighting = Sighting.new(location: location, bird: bird)

    if sighting.save
      sightings = Sighting.all
      render json: sightings.to_json(:include => {:bird => {:only =>[:name, :species, :image_url]}, :location => {:only =>[:latitude, :longitude]}}, :except => [:updated_at])
    else
      render json: {message: "Error"}
    end
  end

  private

  def sighting_params
    params.require(:sighting).permit(:longitude, :latitude, :birdName)
  end

end