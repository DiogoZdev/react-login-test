import './InfoCard.scss';

type Props = {
  title: string,
}

export function InfoCard(p: Props) {
  return (
    <div className="InfoCard-wrapper">
      <h1>{p.title}</h1>
    </div>
  )
}