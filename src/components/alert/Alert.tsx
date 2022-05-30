import './Alert.scss';

type Props = {
  message: string,
}

export function Alert(p: Props) {
  return(
    <div className="Alert-wrapper">
      <p>{ p.message }</p>
    </div>
  );
}