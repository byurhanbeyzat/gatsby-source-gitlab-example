import React from 'react'

const ProjectsSection = ({ data }) => (
  <section className="projects relative" style={{ top: '-142px' }}>
    <div className="container mx-auto">
      <h2 className="font-bold text-4xl text-center py-5">Gitlab Projects</h2>
      <div className="card text-sm is-revealing flex flex-wrap justify-center">
        {data.map(({ node }) => (
          <div
            className="max-w-sm w-full rounded overflow-hidden shadow-md mx-4 my-4"
            key={`project-${node.id}`}
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                <a
                  href={node.web_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black no-underline"
                >
                  {node.name}
                </a>
              </div>
              <p className="text-grey-darker text-base">
                {node.description.length > 55
                  ? `${node.description.substr(0, 55)}...`
                  : node.description}
              </p>
            </div>
            <div className="px-6 py-4">
              {node.star_count && (
                <span className="inline-block bg-grey-lighter rounded-full px-2 py-1 font-semibold text-grey-darker mr-2">
                  {node.star_count}
                </span>
              )}
              {node.fork_count && (
                <span className="inline-block bg-grey-lighter rounded-full px-2 py-1 font-semibold text-grey-darker mr-2">
                  {node.fork_count}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default ProjectsSection
