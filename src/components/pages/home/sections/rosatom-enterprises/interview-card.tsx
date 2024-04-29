interface IProps {
  url?: string;
  title: string;
  description: string;
}

export const InterviewCard = (props: IProps) => {
  return (
    <div>
      <iframe
        width="100%"
        height="100%"
        title={props.title}
        src="https://www.youtube.com/embed/KdbDDVcw7qc?rel=0"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
