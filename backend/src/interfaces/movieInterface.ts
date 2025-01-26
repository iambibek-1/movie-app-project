import * as Sequelize from 'sequelize';
export interface InputMovieInterface{
    title:string;
    imdbScore: number;
    directorId: number,
    actors:object,
    genreId:number;//from genre table
    description:string,
    thumbnailUrl:string,
    embedVideoUrl:string,
    avgRatings:number,
    totalRatings:number,
    duration:string,
    releasedAt:Date,
}

export interface MovieInterface extends InputMovieInterface {
    id: number;
}
export interface MovieModelInterface extends Sequelize.Model<MovieInterface,Partial<InputMovieInterface>>,MovieInterface{}