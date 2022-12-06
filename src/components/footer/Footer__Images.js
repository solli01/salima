import IMAGE6 from "../../assets/IMAGE (6).png";
import IMAGE7 from "../../assets/IMAGE (7).png";
import IMAGE8 from "../../assets/IMAGE (8).png";
import IMAGE9 from "../../assets/IMAGE (9).png";
import IMAGE10 from "../../assets/IMAGE (10).png";
function Footer__Images() {
    return (
        <div class="explore">
            <img class="image_footer" src={IMAGE6} alt="IMAGE (6).png" />
            <div class="icon__links">
            <div class="back__link"><img src={IMAGE7} alt="IMAGE (7).png" /></div>
            <div class="back__link"><img src={IMAGE8} alt="IMAGE (8).png" /></div>
            <div class="back__link"><img src={IMAGE9} alt="IMAGE (9).png" /></div>
            <div class="back__link"><img src={IMAGE10} alt="IMAGE (10).png" /></div>
            </div>
      </div>
    );
}
export default Footer__Images;