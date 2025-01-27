import Joi from 'joi' ;

const createMovie = Joi.object({
    title: Joi.string().label('Title').required(),
    imdbScore: Joi.number().label('imdbScore').required(),
    directorId: Joi.number().label('DirectorId').required(),
    actors: Joi.any().label('Actors').required(),
    genreId: Joi.number().label('genreId').required(),
    description: Joi.string().label('Description').required(),
    thumbnailUrl: Joi.string().label('ThumbnailUrl').required(),
    embedVideoUrl: Joi.string().label('EmbedVideoUrl').required(),
    avgRatings: Joi.number().label('AvgRatings').required(),
    totalRatings: Joi.number().label('TotalRatings').required(),
    duration: Joi.string().label('Duration').required(),
    releasedAt: Joi.date().label('Date').required(),

});
export {createMovie}