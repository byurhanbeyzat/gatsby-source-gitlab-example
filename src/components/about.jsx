import React from 'react'

const AboutSection = ({ data }) => (
  <section className="about section flex justify-center">
    <div className="w-full-lg mx-4 flex items-center rounded border-grey bg-grey-lightest shadow p-8">
      <img
        className="h-48 w-48 h-28 w-28 rounded-full mr-4"
        src={data.avatar}
        alt={data.name}
      />
      <div className="flex flex-col justify-between items-center leading-normal">
        <div>
          <div className="text-black font-bold text-xl mb-1">
            {data.name} / @{data.username}
          </div>
          <p className="text-grey-darker text-base">{data.bio}</p>
        </div>
      </div>
    </div>
  </section>
)

export default AboutSection
