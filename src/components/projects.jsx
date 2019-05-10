import React from 'react'

const ProjectsSection = ({ data }) => (
  <section className="projects section">
    {data.map(({ node: { id, name, description, star_count, fork_count } }) => (
      <div className="card text-sm is-revealing" key={`project-${id}`}>
        <div className="max-w-sm rounded overflow-hidden shadow-md mx-4 my-4">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-grey-darker text-base">
              {description.length > 60
                ? `${description.substr(0, 60)}...`
                : description}
            </p>
          </div>
          <div className="px-6 py-4">
            {star_count && (
              <span className="inline-block bg-grey-lighter rounded-full px-2 py-1 text-sm font-semibold text-grey-darker mr-2">
                {star_count}
              </span>
            )}
            {fork_count && (
              <span className="inline-block bg-grey-lighter rounded-full px-2 py-1 text-sm font-semibold text-grey-darker mr-2">
                {fork_count}
              </span>
            )}
          </div>
        </div>
      </div>
    ))}
  </section>
)

export default ProjectsSection
