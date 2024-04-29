interface IProps {
  imageUrl: string;
  title: string;
  description: string;
}

export const NuclearEnterpriseCard = (props: IProps) => {
  return (
    <div className="flex flex-col">
      <img
        src={props.imageUrl}
        className="object-cover lg:mb-7 mb-5"
        alt="Image"
      />
      <h2 className="text-2xl text-brown-t font-semibold lg:mb-5 mb-3">
        {props.title}
      </h2>
      <p className="text-p">{props.description}</p>
    </div>
  );
};
