import { Tag, Divider, Row, Col, Spin, Tooltip } from 'antd';
import { useMoney } from "@/settings";

// export default function FeedbackIaCard({
//   title,
//   content,
//   isLoading = false,
// }) {
//     const { moneyFormatter } = useMoney();
//   return (
//     <Col
//       className="gutter-row"
//       xs={{ span: 24 }}
//       sm={{ span: 24 }}
//       md={{ span: 24 }}
//       lg={{ span: 24 }}
//     >
//       <div
//         className="whiteBox shadow"
//         style={{ color: '#595959', fontSize: 13, minHeight: '106px', height: '100%', overflow: 'auto' }}
//       >
//         <div className="pad15 strong" style={{ textAlign: 'center', justifyContent: 'center' }}>
//           <h3
//             style={{
//               color: '#22075e',
//               fontSize: 'large',
//               margin: '5px 0',
//               textTransform: 'capitalize',
//             }}
//           >
//             {title}
//           </h3>
//         </div>
//         <Divider style={{ padding: 0, margin: 0 }}></Divider>
//         <div className="pad15">
//           <Row gutter={[0, 0]} justify="space-between" wrap={false}>
//               <div className="left" style={{ whiteSpace: 'normal' }}>
//                 {content}
//               </div>
//               {isLoading ? (
//                 <Spin />
//               ) : (
//                <></>
//               )}
//           </Row>
//         </div>
//       </div>
//     </Col>
//   );
// }
export default function FeedbackIaCard({
  title,
  content,
  isLoading = false,
}) {
  const { moneyFormatter } = useMoney();
  return (
    <Col
      className="gutter-row"
      xs={{ span: 24 }}
      sm={{ span: 24 }}
      md={{ span: 24 }}
      lg={{ span: 24 }}
    >
      <div
        className="whiteBox shadow"
        style={{ color: '#595959', fontSize: 13, height: 'auto' }}
      >
        <div className="pad15 strong" style={{ textAlign: 'center', justifyContent: 'center' }}>
          <h3
            style={{
              color: '#22075e',
              fontSize: 'large',
              margin: '5px 0',
              textTransform: 'capitalize',
            }}
          >
            {title}
          </h3>
        </div>
        <Divider style={{ padding: 0, margin: 0 }}></Divider>
        <div className="pad15">
          <Row gutter={[0, 0]}>
            {isLoading ? (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Spin />
              </div>
            ) : (
              <div className="left" style={{ maxWidth: 'normal', whiteSpace: 'pre-wrap', color: '#292929', fontSize: '14px' }}>
                {content}
              </div>

            )}
          </Row>
        </div>
      </div>
    </Col>
  );
}
