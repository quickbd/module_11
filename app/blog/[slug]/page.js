import Link from "next/link";
import blogData from "../../blog/data/blogData.json";
import styles from "../../blog/styles.module.css";
const blogDetails = ({ params }) => {
  const post = blogData.find((p) => p.slug === params.slug);

  if (post) {
    return (
      <div className="container mt-20    m-auto  items-center justify-between">
        <div className="my-10">
          <div className="text-right">
            <Link
              href="/blog"
              className="align-content-end px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Back
            </Link>
          </div>
          <div>
            <img
              className="rounded-t-lg"
              src={`/images/post/${post.image}`}
              alt=""
            />
            <h1 className={styles.red}>{post.title}</h1>
            <p>{post.details}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return "Page Not Found";
  }
};
export default blogDetails;
