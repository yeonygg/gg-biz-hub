import {
  Card,
  Section,
  BodyText,
  HR,
  Button,
  InputCheckbox,
} from "pier-design-system";
import SubHeading from "./SubHeading";
import ResultTable from "./ResultTable";
import LaunchTimeline from "./LaunchTimeline";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const RateBreakdownCard = (props) => {
  const resultHead = "Plan Breakdown";
  const bodyText =
    "Click the Share button to share this information with the client";
  // console.log(props.campaign);

  const printDocument = () => {
    const input = document.getElementById("capture");
    html2canvas(input, {
      width: 1200,
      height: 2400,
      windowWidth: 1200,
      windowHeight: 2400,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [2400, 1200],
      });
      pdf.addImage(imgData, "PNG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("export.pdf");
    });
  };

  return (
    <Card className="result-card">
      <div className="card-style">
        <div
          className="-p-b-5 -p-r-3"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SubHeading text={resultHead} body={bodyText} />
          <InputCheckbox
            size="sm"
            disabled={false}
            dark={false}
            error={false}
            partial={false}
          >
            Blend CPMs
          </InputCheckbox>
        </div>

        <ResultTable campaign={props.campaign} />
        <HR className="-m-b-3" />
        <LaunchTimeline campaign={props.campaign} />
        <HR />
        <div className="buttons-section">
          <Button
            size="sm"
            title="Button"
            icon="fas fa-external-link-alt"
            disabled={false}
            dark={false}
            pill={false}
            onClick={printDocument}
          >
            Share
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default RateBreakdownCard;
