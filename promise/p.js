//https://youtu.be/69vpmZgDeN8?t=5903

import Results from '@/components/Results';
const API_KEY process.env.API_KEY;
export default async function Home({searchParams })
const genre searchParams.genre 'fetchTrending';
const res await new Promise((resolve)=>{
setTimeout(async ()=>
const response await fetch(
https://api.themoviedb.org/3s{
genre ==='fetchTopRated'?/movie/top_rated:/trending/all/week'
}?api_key=${API_KEY&Language=en-US&page=1',
next:revalidate:10 }
)；
resolve(response);
2000);//Delay of 2 seconds
}):
const data await res.json();
if (!res.ok){
throw new Error('Failed to fetch data');
