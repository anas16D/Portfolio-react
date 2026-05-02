import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
// import matter from "gray-matter";
import { parseMarkdown } from "./utils";

const Blog = () => {
  const { id } = useParams();
  const params = useParams();

  const [post, setPost] = useState(null);

  console.log("Slug:", id,params);

  useEffect(() => {
    import(`../../_posts/${id}.md`)
      .then((res) => {
        console.log("Markdown content:", res);
        // const parsed = matter(res.default);
        const parsed = parseMarkdown(res.default);
        console.log("Parsed markdown:", parsed);
        setPost(parsed);
        // setPost(parsed);

      })
      .catch(() => {
        setPost(null);
      });
  }, [id]);

  if (!post) return <p>Post not found  haha</p>;


  return (
    <div className="prose prose-lg md:prose-xl mx-auto px-6 py-8">
      <h1>{post?.title}</h1>
      <p>{`${post?.date} by ${post?.author} `}</p>
      <hr className="border-1 border-black my-0"/> 
      <Markdown
      >{post?.content || post}</Markdown>
    </div>
  );
};

export default Blog;


/**
 * practice and test
 */
function multiply(a, b) {
  return a * b;
}

function multiplyCurried(a) {
  return function(b) {
    return a * b;
  };
}

const multiplyBy2 = multiplyCurried(2);
const result = multiplyBy2(5);

function createWorkflowData(organization, individual, user, site,account){
  const workflowData = {
    organization:organization,
    individual:individual,
    user:user,
    site:site,
    account:account 
  }
  return workflowData;
}

createWorkflowData("Org1", "Ind1", "User1", "Site1","Acc1");
createWorkflowData("Org1", undefined, undefined, undefined,"Acc1");

function createWorkflowDataCurried(organization) {
  return function(site) {
    return function(account) {
      return function(individual) {
        return function(user) {
          return {
            organization: organization,
            individual: individual,
            user: user,
            site: site,
            account: account
          };
        };
      };
    };
  };
}

const workflowDataCurried = createWorkflowDataCurried("Org1")("Site1")("Acc1")("Individual1")("User1");

const createStaffWorkflowData = createWorkflowDataCurried("Org1")("Site1")("Acc1");

createStaffWorkflowData("Individual2")("User2");