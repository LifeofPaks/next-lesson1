'use client'
import Image from "next/image";
import Link from "next/link";
import "./blog.scss";
import { notFound } from "next/navigation";

const getData = async() =>{
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts')  

  if(!resp.ok){
    return notFound()
  } else{
    return resp.json()
  }
}

const Blog = async() => {

  const data = await getData()
  

  return (
    <div className="container blog">
      <h1>Our Blog</h1>
      <div className="BlogWraps">
        {data?.map((item) => (
          <Link href={`/blog/${item.id}`} className="blogItem" key={item.id}>
            <Image
              width={600}
              height={400}
              src="/illustration.avif"
              alt="cat-Img"
            />
            <div className="blogDesc">
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
