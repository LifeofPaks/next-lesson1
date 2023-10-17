import "./blogId.scss";
import Image from "next/image";

const getData = async (id) => {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!resp.ok) {
    return notFound();
  } else {
    return resp.json();
  }
};

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className="blogId container">
      <div className="top">
        <div className="left">
          <h1>{data?.title}</h1>
          <p>{data?.body}</p>

          <div className="authur">
            <Image src="/p1.jpeg" alt="authur" width={40} height={40} />
            <span>Paks Promise</span>
          </div>
        </div>

        <Image src="/bid1.avif" alt="bid" width={600} height={400} />
      </div>

      <div className="bottom">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          deleniti modi praesentium quasi ipsa saepe ab, eius itaque at.
          Incidunt, deleniti, voluptatibus error eum sequi sed saepe similique
          iure eligendi ad laborum, laboriosam quo corrupti earum dolorem?
          Consequatur facilis nisi consectetur quaerat voluptatibus ut iusto sed
          voluptatum inventore. Eveniet veritatis odit molestias quis, earum
          maiores tempore suscipit itaque illum eligendi culpa natus! A deleniti
          unde suscipit error rem est ab?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          deleniti modi praesentium quasi ipsa saepe ab, eius itaque at.
          Incidunt, deleniti, voluptatibus error eum sequi sed saepe similique
          iure eligendi ad laborum, laboriosam quo corrupti earum dolorem?
          Consequatur facilis nisi consectetur quaerat voluptatibus ut iusto sed
          voluptatum inventore. Eveniet veritatis odit molestias quis, earum
          maiores tempore suscipit itaque illum eligendi culpa natus! A deleniti
          unde suscipit error rem est ab?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          deleniti modi praesentium quasi ipsa saepe ab, eius itaque at.
          Incidunt, deleniti, voluptatibus error eum sequi sed saepe similique
          iure eligendi ad laborum, laboriosam quo corrupti earum dolorem?
          Consequatur facilis nisi consectetur quaerat voluptatibus ut iusto sed
          voluptatum inventore. Eveniet veritatis odit molestias quis, earum
          maiores tempore suscipit itaque illum eligendi culpa natus! A deleniti
          unde suscipit error rem est ab?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
