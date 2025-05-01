
const ChallengesAndSolutions = () => {
    return (
        <div className="flex flex-col gap-6 mt-[50px]">
      <div>
        <h1 className="font-Rethink text-3xl font-bold leading-11 text-white">
          Challenges We Have Faced and Resolved
        </h1>
        <p
          className={`text-neutral-65 font-Inter text-sm md:text-base 2xl:text-xl leading-4 md:leading-7 mt-3 max-w-full lg:max-w-[900px]`}
        >
          Complete redesign of an e-commerce platform with focus on mobile
          experience and conversion optimization. The new design increased
          mobile conversions by 45% and overall user engagement by 30% within
          the first three months.
        </p>
      </div>

      {/* Technology Used */}
      <div>
        <h1 className="font-Rethink text-xl font-bold leading-11 text-white">
          Technologies Used
        </h1>
        <div className="flex items-center gap-3 md:gap-5 mt-3">
          <div className="bg-secondary-20/80 border border-secondary-40 rounded-md px-3 md:px-4 py-1 md:py-2 font-medium text-[10px] md:text-sm text-neutral-40">
            Next.JS
          </div>
          <div className="bg-secondary-20/80 border border-secondary-40 rounded-md px-3 md:px-4 py-1 md:py-2 font-medium text-[10px] md:text-sm text-neutral-40">
            Express.JS
          </div>
        </div>
      </div>
    </div>
    );
};

export default ChallengesAndSolutions;