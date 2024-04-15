interface IProps {
  imageUrl: string;
  descriptions: [string, string, string];
}

export const ImageDescription = (props: IProps) => {
  return (
    <div className="relative">
      <img src={props.imageUrl} alt="" />
      <div
        className={`absolute md:h-[67px] md:w-[411px] px-10 py-4 bg-primary left-[20px] top-[37px] z-20 text-white font-semibold leading-8 text-xl`}
      >
        {props.descriptions[0]}
      </div>
      <div
        className={`absolute md:h-[67px] md:w-[411px] px-10 py-4 bg-[#333333] left-[20px] top-[119px] z-30 text-white font-semibold leading-8 text-xl`}
      >
        {props.descriptions[1]}
      </div>
      <div
        className={`absolute md:h-[67px] md:w-[411px] px-10 py-4 bg-secondary left-[20px] top-[201px] z-30 text-white font-semibold leading-8 text-xl`}
      >
        {props.descriptions[2]}
      </div>
    </div>
  );
};
