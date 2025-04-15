export default async function getAllPosts() {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10',
        {
            // cache: "force-cache" //default
            // cache:"no-store"  //will show updated data
            next: {
                revalidate: 10       //it will stay static and works like dynamic
            }
        }
    );

    if (!result.ok) {
        throw new Error('There was an error fatching posts..')
    }

    return result.json();
}