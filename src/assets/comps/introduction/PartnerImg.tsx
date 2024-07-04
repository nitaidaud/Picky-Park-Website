
export default function PartnerImg(props: { partner: string }) {

  const partnerImg: string = props.partner;
  return (
    <div className="owl-item ">
      <div className="item">
        <img src={partnerImg} alt='partnerImg' />
      </div>
    </div>
  );
}
