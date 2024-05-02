import { AnchorsKeys, RoutesKeys } from '../../../lib/constants';
import { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../../../lib/utils/tools';

interface IProps {
  anchor: AnchorsKeys;
  route: RoutesKeys;
  className?: string;
  children?: ReactNode;
}

export const AnchorLink = (props: IProps) => {
  const { hash } = useLocation();
  const navigate = useNavigate();

  const onClick = (event: React.SyntheticEvent) => {
    if (props.anchor == hash?.split('#')[1]) {
      navigate(props.route);
    } else {
      navigate(props.route + '#' + props.anchor);
    }
    event.preventDefault();
  };

  return (
    <a onClick={onClick} className={cn(props.className, 'cursor-pointer')}>
      {props.children}
    </a>
  );
};
