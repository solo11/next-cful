export default class ContentfulApi {
    static async callContentful(query) {
        const fetchURL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

        const fetchOptions = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`;
                "Content-Type": "application/json"
            }
        }
    }
}