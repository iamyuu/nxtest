import './title.module.css';

export interface TitleProps {
  color?: string;
  children: React.ReactNode;
}

export function Title(props: TitleProps) {
  return <h1 style={{ color: props.color ?? 'blue' }}>{props.children}</h1>;
}

export default Title;
