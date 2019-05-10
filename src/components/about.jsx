import React from 'react'

const AboutSection = ({ data }) => (
  <>
    <div
      className="relative bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1524260855046-f743b3cdad07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1602&q=80")',
        height: '380px',
      }}
    />
    <section
      className="about section flex justify-center relative"
      style={{ top: '-196px' }}
    >
      <div className="w-full-lg mx-4 flex items-center rounded border-grey bg-grey-lightest shadow p-8">
        <img
          className="h-48 w-48 rounded-full mr-4"
          src={data.avatar}
          alt={data.name}
        />
        <div className="flex flex-col justify-between leading-normal">
          <h2 className="text-black font-bold text-xl mb-1">
            {data.name} / @{data.username}
          </h2>
          <p className="text-grey-darker">{data.bio}</p>
          <a
            href={data.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey-darker"
          >
            {data.website}
          </a>
        </div>
      </div>
    </section>
  </>
)

export default AboutSection
