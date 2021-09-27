export class Update {
    user: string;
    title: string;
    author: string;
    image: string;
    description: string;

    constructor({ user, title, author, image, description }:
        { user: string, title: string, author: string, image: string, description: string }) {
        this.user = user;
        this.title = title;
        this.author = author;
        this.image = image;
        this.description = description;

    }

}