import { socialLinks } from "@/components/Shared/Footer/footer.data";

const FollowUsOn = () => {
  return (
    <div className="bg-neutral-800/50 rounded-2xl border border-neutral-65/30 hover:border-neutral-65/50 p-5">
      <h1 className={`text-white font-rethink text-xl md:text-2xl font-bold`}>
        Follow Us On
      </h1>
      <hr className="h-0.5 bg-neutral-65/30 w-full mt-3" />
      <div className="flex items-center gap-4 mt-4">
        {socialLinks?.map((item) => (
          <a
            key={item?.name}
            href={item?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="size-[40px] rounded-full hover:bg-primary-50 bg-primary-20 transition-all duration-300 cursor-pointer flex items-center justify-center group"
            aria-label={`Follow us on ${item?.name}`}
          >
            <span className="text-xl group-hover:scale-110 transition-transform duration-300">
              {item?.icon}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FollowUsOn;
