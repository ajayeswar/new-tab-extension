export default function BookMark(props) {
  return (
    <a title={props.title} href={props.url}>
      <img alt="favicon-broken" width="24px" height="24px" src={`https://api.statvoo.com/favicon/?url=${props.url}`}></img>
      <h1 id={props.id}>{props.title[0]}</h1>
      <h3 id={props.id}>{props.title}</h3>
    </a>
  );
}
