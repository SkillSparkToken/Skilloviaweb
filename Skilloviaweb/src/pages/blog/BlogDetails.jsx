import React from 'react';

const BlogDetail = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="mb-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold pt-8 mb-2">
            Insights and Stories from the Skillovia Community
          </h1>
          <p className="text-gray-600 text-sm">
            Explore stories of success, learn new skills, and stay updated on the latest Skillovia news.
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="w-full mb-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="w-full h-[400px] rounded-2xl overflow-hidden">
            <img
              src="/api/placeholder/1200/400"
              alt="Community gathering"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 pb-16">
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros
            vestibulum, tincidunt nunc ac, dignissim nisi. Ut lacinia metus eget
            est faucibus, in vehicula nulla tincidunt. Nullam id felis euismod,
            varius nunc id, sagittis nunc.
          </p>

          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="mb-8">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel,
            ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada
            feugiat. Nulla quis lorem ut libero malesuada feugiat.
          </p>

          {/* Quote Block */}
          <blockquote className="border-l-4 border-gray-300 pl-4 my-8">
            <p className="text-lg italic text-gray-700">
              "In great design, just like a great habit you've come to love and embrace, great user experience is the answer we don't see because it fits so naturally with what we want."
            </p>
          </blockquote>

          {/* Image with caption */}
          <figure className="my-8">
            <img
              src="/api/placeholder/800/400"
              alt="Person reading"
              className="w-full rounded-lg"
            />
            <figcaption className="text-sm text-gray-500 mt-2 text-center">
              The importance of good user experience in design
            </figcaption>
          </figure>

          <h2 className="text-2xl font-bold mb-4">Define and refine</h2>
          <p className="mb-8">
            Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae.
          </p>

          <h2 className="text-2xl font-bold mb-4">Clear objectives</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Start with clear understanding of your objectives</li>
            <li>Research your target audience thoroughly</li>
            <li>Define your key performance indicators</li>
            <li>Create a realistic timeline for implementation</li>
            <li>Plan for continuous improvement and iteration</li>
          </ul>

          {/* Final image */}
          <img
            src="/api/placeholder/800/400"
            alt="Design process"
            className="w-full rounded-lg mb-8"
          />

          <p>
            Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit
            amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam
            id dui posuere blandit.
          </p>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;