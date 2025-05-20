// TODO: explore using npm package like mammoth to read the word file instead
import { DialogDescription } from "@radix-ui/react-dialog";

function SubscriptionAgreement() {
  return (
    <DialogDescription>
      <div className="mt-4 max-h-[300px] overflow-y-auto text-sm"
      dangerouslySetInnerHTML={{
        __html: `
        <style type="text/css">
    .awlist1 {
        list-style: none;
        counter-reset: awlistcounter1_0
    }

    .awlist1>li:before {
        content: '('counter(awlistcounter1_0, upper-latin) ')';
        counter-increment: awlistcounter1_0
    }

    .awlist2 {
        list-style: none;
        counter-reset: awlistcounter23_0
    }

    .awlist2>li:before {
        content: counter(awlistcounter23_0) '.';
        counter-increment: awlistcounter23_0
    }

    .awlist3 {
        list-style: none;
        counter-reset: awlistcounter23_1
    }

    .awlist3>li:before {
        content: counter(awlistcounter23_0) '.'counter(awlistcounter23_1);
        counter-increment: awlistcounter23_1
    }

    .awlist4 {
        list-style: none;
        counter-reset: awlistcounter24_0
    }

    .awlist4>li:before {
        content: counter(awlistcounter24_0, none);
        counter-increment: awlistcounter24_0
    }

    .awlist5 {
        list-style: none;
        counter-reset: awlistcounter23_1 1
    }

    .awlist5>li:before {
        content: '1.'counter(awlistcounter23_1);
        counter-increment: awlistcounter23_1
    }

    .awlist6 {
        list-style: none;
        counter-reset: awlistcounter23_0 1
    }

    .awlist6>li:before {
        content: counter(awlistcounter23_0) '.';
        counter-increment: awlistcounter23_0
    }

    .awlist7 {
        list-style: none;
        counter-reset: awlistcounter23_2
    }

    .awlist7>li:before {
        content: '('counter(awlistcounter23_2, lower-latin) ')';
        counter-increment: awlistcounter23_2
    }

    .awlist8 {
        list-style: none;
        counter-reset: awlistcounter23_1 3
    }

    .awlist8>li:before {
        content: '2.'counter(awlistcounter23_1);
        counter-increment: awlistcounter23_1
    }

    .awlist9 {
        list-style: none;
        counter-reset: awlistcounter23_3
    }

    .awlist9>li:before {
        content: '('counter(awlistcounter23_3, lower-roman) ')';
        counter-increment: awlistcounter23_3
    }

    .awlist10 {
        list-style: none;
        counter-reset: awlistcounter23_0 2
    }

    .awlist10>li:before {
        content: counter(awlistcounter23_0) '.';
        counter-increment: awlistcounter23_0
    }

    .awlist11 {
        list-style: none;
        counter-reset: awlistcounter25_1
    }

    .awlist11>li:before {
        content: '3.'counter(awlistcounter25_1);
        counter-increment: awlistcounter25_1
    }

    .awlist12 {
        list-style: none;
        counter-reset: awlistcounter23_1 1
    }

    .awlist12>li:before {
        content: counter(awlistcounter23_0) '.'counter(awlistcounter23_1);
        counter-increment: awlistcounter23_1
    }

    .awlist13 {
        list-style: none;
        counter-reset: awlistcounter25_2 1
    }

    .awlist13>li:before {
        content: '('counter(awlistcounter25_2, lower-latin) ')';
        counter-increment: awlistcounter25_2
    }

    .awlist14 {
        list-style: none;
        counter-reset: awlistcounter25_1 2
    }

    .awlist14>li:before {
        content: '4.'counter(awlistcounter25_1);
        counter-increment: awlistcounter25_1
    }

    .awlist15 {
        list-style: none;
        counter-reset: awlistcounter23_0 5
    }

    .awlist15>li:before {
        content: counter(awlistcounter23_0) '.';
        counter-increment: awlistcounter23_0
    }

    .awlist16 {
        list-style: none;
        counter-reset: awlistcounter25_1 5
    }

    .awlist16>li:before {
        content: '7.'counter(awlistcounter25_1);
        counter-increment: awlistcounter25_1
    }

    .awlist17 {
        list-style: none;
        counter-reset: awlistcounter23_2 1
    }

    .awlist17>li:before {
        content: '('counter(awlistcounter23_2, lower-latin) ')';
        counter-increment: awlistcounter23_2
    }

    .awlist18 {
        list-style: none;
        counter-reset: awlistcounter23_1 1
    }

    .awlist18>li:before {
        content: '8.'counter(awlistcounter23_1);
        counter-increment: awlistcounter23_1
    }

    .awlist19 {
        list-style: none;
        counter-reset: awlistcounter25_0 8
    }

    .awlist19>li:before {
        content: counter(awlistcounter25_0) '.';
        counter-increment: awlistcounter25_0
    }

    .awlist20 {
        list-style: none;
        counter-reset: awlistcounter23_1
    }

    .awlist20>li:before {
        content: '9.'counter(awlistcounter23_1);
        counter-increment: awlistcounter23_1
    }

    .awlist21 {
        list-style: none;
        counter-reset: awlistcounter23_0 9
    }

    .awlist21>li:before {
        content: counter(awlistcounter23_0) '.';
        counter-increment: awlistcounter23_0
    }

    .awlist22 {
        list-style: none;
        counter-reset: awlistcounter23_1 1
    }

    .awlist22>li:before {
        content: '11.'counter(awlistcounter23_1);
        counter-increment: awlistcounter23_1
    }

    .awlist23 {
        list-style: none;
        counter-reset: awlistcounter23_0 11
    }

    .awlist23>li:before {
        content: counter(awlistcounter23_0) '.';
        counter-increment: awlistcounter23_0
    }

    .awlist24 {
        list-style: none;
        counter-reset: awlistcounter25_2
    }

    .awlist24>li:before {
        content: '('counter(awlistcounter25_2, lower-latin) ')';
        counter-increment: awlistcounter25_2
    }

    .awlist25 {
        list-style: none;
        counter-reset: awlistcounter25_3
    }

    .awlist25>li:before {
        content: '('counter(awlistcounter25_3, lower-roman) ')';
        counter-increment: awlistcounter25_3
    }

    .awlist26 {
        list-style: none;
        counter-reset: awlistcounter25_1
    }

    .awlist26>li:before {
        content: '14.'counter(awlistcounter25_1);
        counter-increment: awlistcounter25_1
    }

    .awlist27 {
        list-style: none;
        counter-reset: awlistcounter23_1 1
    }

    .awlist27>li:before {
        content: '14.'counter(awlistcounter23_1);
        counter-increment: awlistcounter23_1
    }

    .awlist28 {
        list-style: none;
        counter-reset: awlistcounter23_0 14
    }

    .awlist28>li:before {
        content: counter(awlistcounter23_0) '.';
        counter-increment: awlistcounter23_0
    }

    .awlist29 {
        list-style: none;
        counter-reset: awlistcounter23_0 15
    }

    .awlist29>li:before {
        content: counter(awlistcounter23_0) '.';
        counter-increment: awlistcounter23_0
    }

    .awlist30 {
        list-style: none;
        counter-reset: awlistcounter23_0 16
    }

    .awlist30>li:before {
        content: counter(awlistcounter23_0) '.';
        counter-increment: awlistcounter23_0
    }

    .awlist31 {
        list-style: none;
        counter-reset: awlistcounter23_0 17
    }

    .awlist31>li:before {
        content: counter(awlistcounter23_0) '.';
        counter-increment: awlistcounter23_0
    }

    .awlist32 {
        list-style: none;
        counter-reset: awlistcounter23_0 19
    }

    .awlist32>li:before {
        content: counter(awlistcounter23_0) '.';
        counter-increment: awlistcounter23_0
    }

    .awlist33 {
        list-style: none;
        counter-reset: awlistcounter23_0 23
    }

    .awlist33>li:before {
        content: counter(awlistcounter23_0) '.';
        counter-increment: awlistcounter23_0
    }

    .awlist34 {
        list-style: none;
        counter-reset: awlistcounter25_1
    }

    .awlist34>li:before {
        content: '24.'counter(awlistcounter25_1);
        counter-increment: awlistcounter25_1
    }

    .awlist35 {
        list-style: none;
        counter-reset: awlistcounter25_1
    }

    .awlist35>li:before {
        content: '26.'counter(awlistcounter25_1);
        counter-increment: awlistcounter25_1
    }

    .awlist36 {
        list-style: none;
        counter-reset: awlistcounter23_0 27
    }

    .awlist36>li:before {
        content: counter(awlistcounter23_0) '.';
        counter-increment: awlistcounter23_0
    }
</style>
<div>
    <p style="margin-top:0pt; margin-bottom:6pt; text-align:justify; line-height:15pt;"><span style="font-family:Arial;">This SaaS Subscription Agreement (the &ldquo;Agreement&rdquo;) is entered into between you (&ldquo;Customer,&rdquo; &ldquo;You,&rdquo; or &ldquo;Your&rdquo;) and Longevity Partners Limited (&ldquo;Provider,&rdquo; &ldquo;We,&rdquo; or &ldquo;Us&rdquo;). This Agreement governs the use of the Legislation Dashboard and/or BREEAM In-Use (BIU) Platform and/or GRESB Platform and/or any other platform provided by the Provider, the software-as-a-service platform (the &ldquo;Service&rdquo;).</span></p>
    <p style="margin-top:0pt; margin-bottom:6pt; text-align:justify; line-height:15pt;"><span style="font-family:Arial;">This Agreement extends to Provider&apos;s Affiliates. The Provider&apos;s Affiliates may provide Services under this Agreement, and Provider remains fully responsible for its Affiliates&apos; compliance with the terms herein.&nbsp;</span></p>
    <p style="margin-top:0pt; margin-bottom:6pt; text-align:justify; line-height:15pt;"><span style="font-family:Arial;">The Customer as noted in the Order Letter is bound by these terms and authorises you to enter into this Agreement. By clicking &quot;I Agree&quot; or by accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by this Agreement, including the terms and conditions and any applicable policies, which may be updated from time to time.&nbsp;</span></p>
    <p style="margin-top:0pt; margin-bottom:6pt; text-align:justify; line-height:15pt;"><span style="font-family:Arial;">In the event of any conflict, inconsistency or ambiguity between the Order Letter and this Agreement, the Order Letter shall prevail.&nbsp;</span></p>
    <p style="margin-top:18pt; margin-bottom:18pt; line-height:normal; font-size:11pt;"><strong><span style="font-family:Arial;">BACKGROUND</span></strong></p>
    <ol type="A" class="awlist1" style="margin:0pt; padding-left:0pt;">
        <li style="margin-top:6pt; margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial; font-size:10pt; text-transform:uppercase;"><span style="width:22.67pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a299878"><span style="font-size:12pt; text-transform:none;">The Provider has developed certain software applications and platforms which it makes available to subscribers via the internet on for the purpose of&nbsp;</span></a><span style="font-size:12pt; text-transform:none;">the Service.</span><span style="font-size:12pt; text-transform:none;">&nbsp;&nbsp;</span></li>
        <li style="margin-top:6pt; margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial; font-size:10pt; text-transform:uppercase;"><span style="width:22.67pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a122341"><span style="font-size:12pt; text-transform:none;">The Customer wishes to use the Provider&apos;s service in its business operations.</span></a></li>
        <li style="margin-top:6pt; margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial; font-size:10pt; text-transform:uppercase;"><span style="width:22.12pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a389374"><span style="font-size:12pt; text-transform:none;">The Provider has agreed to provide and the Customer has agreed to take and pay for the Provider&apos;s service subject to the terms and conditions of this agreement.</span></a></li>
    </ol>
    <p style="margin-top:18pt; margin-bottom:18pt; line-height:normal; font-size:11pt;"><strong><span style="font-family:Arial;">Agreed terms</span></strong></p>
    <ol type="1" class="awlist2" style="margin:0pt; padding-left:0pt;">
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:25.99pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000000"></a><a name="a588274">Interpretation</a>
            <ol type="1" class="awlist3" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a945568">The definitions and rules of interpretation in this clause apply in this agreement.</a></li>
            </ol>
        </li>
    </ol>
    <ul type="disc" class="awlist4" style="margin:0pt; padding-left:0pt;">
        <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:36pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a951312">Affiliates: <span style="font-weight:normal;">entities that control, are controlled by, or are under common control with Provider.&nbsp;</span></a></li>
        <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:36pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Authorised Users<span style="font-weight:normal;">: those employees, agents and independent contractors of the Customer who are authorised by the Customer to use the Services and the Documentation, as further described in clause 2.2(d).</span></li>
        <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:36pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a455822">Business Day<span style="font-weight:normal;">: a day other than a Saturday, Sunday or public holiday in England when banks in London are open for business.</span></a></li>
        <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:36pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a260945">Confidential Information<span style="font-weight:normal;">: information that is proprietary or confidential and is either clearly labelled as such or identified as Confidential Information in clause 11.1</span><em><u><span style="font-weight:normal;">.</span></u></em></a></li>
        <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial;"><span style="width:36pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a119221"><strong>Customer:&nbsp;</strong>the client entity stated in the Order Letter.&nbsp;</a></li>
        <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:36pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Customer Data<span style="font-weight:normal;">: the data inputted by the Customer, Authorised Users, or the Provider on the Customer&apos;s behalf for the purpose of using the Services or facilitating the Customer&apos;s use of the Services.&nbsp;</span></li>
        <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:36pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a926035">Documentation<span style="font-weight:normal;">: the document made available to the Customer by the Provider online via&nbsp;</span><span style="font-weight:normal;">https://longevity-policy-client.com/</span><span style="font-weight:normal;">&nbsp;or such other web address notified by the Provider to the Customer from time to time which sets out a description of the Services and the user instructions for the Services.</span></a></li>
        <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:36pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a997257">Effective Date<span style="font-weight:normal;">:&nbsp;</span></a><span style="font-weight:normal;">&quot;This Agreement is effective as of the date the Customer clicks &apos;I Agree&apos; to accept the terms and conditions.</span></li>
        <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:36pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a735260">Normal Business Hours<span style="font-weight:normal;">: 8.00 am to 6.00 pm local UK time, each Business Day.</span></a></li>
        <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial;"><span style="width:36pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><strong>Order Letter&nbsp;</strong>means the underlying agreement, terms of business and order letter setting out the subscription fee, initial term, and scope of services under this agreement.</li>
        <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:36pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a595679">Renewal Period<span style="font-weight:normal;">: the period described in clause&nbsp;</span><span style="font-weight:normal; background-color:#c0c0c0;">14.1</span><span style="font-weight:normal;">.</span></a></li>
        <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:36pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a525598">Services<span style="font-weight:normal;">: the subscription services provided by the Provider to the Customer under this agreement via&nbsp;</span><span style="font-weight:normal;">https://longevity-policy-client.com/</span><span style="font-weight:normal;">&nbsp;or any other website notified to the Customer by the Provider from time to time, as more particularly described in the Documentation.</span></a></li>
        <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:36pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a839242">Software<span style="font-weight:normal;">: the online software applications provided by the Provider as part of the Services.</span></a></li>
        <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:36pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a973374">Subscription Fees<span style="font-weight:normal;">: the subscription fees payable by the Customer to the Provider for the User Subscriptions, as set out in paragraph 1 of Schedule 1.</span></a></li>
        <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:36pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a417671">Subscription Term<span style="font-weight:normal;">: has the meaning given in clause&nbsp;</span><span style="font-weight:normal; background-color:#c0c0c0;">14.1</span><span style="font-weight:normal;">&nbsp;(being the Initial Subscription Term together with any subsequent Renewal Periods).</span></a></li>
        <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:36pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a625548">Support Services Policy<span style="font-weight:normal;">: the Provider&apos;s policy for providing support in relation to the Services as made available at&nbsp;</span><span style="font-weight:normal;">https://longevity-policy-client.com/</span><span style="font-weight:normal;">&nbsp;or such other website address as may be notified to the Customer from time to time.</span></a></li>
        <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:36pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a954152">User Subscriptions<span style="font-weight:normal;">: the user subscriptions purchased by the Customer pursuant to clause 9.1 which entitle Authorised Users to access and use the Services and the Documentation in accordance with this agreement.</span></a></li>
        <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:36pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a373261">Virus<span style="font-weight:normal;">: any thing or device (including any software, code, file or programme) which may: prevent, impair or otherwise adversely affect the operation of any computer software, hardware or network, any telecommunications service, equipment or network or any other service or device; prevent, impair or otherwise adversely affect access to or the operation of any programme or data, including the reliability of any programme or data (whether by re-arranging, altering or erasing the programme or data in whole or part or otherwise); or adversely affect the user experience, including worms, trojan horses, viruses and other similar things or devices.</span></a>
            <ol start="2" type="1" class="awlist5" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a209059">Clause, schedule and paragraph headings shall not affect the interpretation of this agreement.</a></li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a646994">A person includes an individual, corporate or unincorporated body (whether or not having separate legal personality) and that person&apos;s legal and personal representatives, successors or permitted assigns.</a></li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a67611">A reference to a company shall include any company, corporation or other body corporate, wherever and however incorporated or established.</a></li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a163350">Unless the context otherwise requires, words in the singular shall include the plural and in the plural shall include the singular.</a></li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a779026">Unless the context otherwise requires, a reference to one gender shall include a reference to the other genders.&nbsp;</a></li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a339116">A reference to a statute or statutory provision is a reference to it as it is in force as at the date of this agreement.</a></li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a326664">A reference to a statute or statutory provision shall include all subordinate legislation made as at the date of this agreement under that statute or statutory provision.</a></li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a114753">A reference to <strong>writing</strong> or <strong>written</strong> excludes fax and email</a>.</li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a176250">References to clauses and schedules are to the clauses and schedules of this agreement; references to paragraphs are to paragraphs of the relevant schedule to this agreement.</a></li>
            </ol>
        </li>
    </ul>
    <ol start="2" type="1" class="awlist6" style="margin:0pt; padding-left:0pt;">
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:25.99pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000001"></a><a name="a522918">User subscriptions</a>
            <ol type="1" class="awlist3" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a997761">Subject to the Customer purchasing the User Subscriptions in accordance with clause 3.3 and clause 9.1, the&nbsp; restrictions set out in this clause 2 and the other terms and conditions of this agreement, the Provider hereby grants to the Customer a non-exclusive, non-transferable right and licence, without the right to grant sublicences, to permit the Authorised Users to use the Services and the Documentation during the Subscription Term solely for the Customer&apos;s internal business operations.</a></li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a491978">In relation to the Authorised Users, the Customer undertakes that:</a>
                    <ol type="a" class="awlist7" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a767641">the maximum number of Authorised Users that it authorises to access and use the Services and the Documentation shall not exceed the number of User Subscriptions it has purchased from time to time;</a></li>
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a684781">it will not allow or suffer any User Subscription to be used by more than one individual Authorised User unless it has been reassigned in its entirety to another individual Authorised User, in which case the prior Authorised User shall no longer have any right to access or use the Services and/or Documentation;</a></li>
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:14.06pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a464519">each Authorised User shall keep a secure password for their use of the Services and Documentation, that such password shall be changed no less frequently than quarterly and that each Authorised User shall keep their password confidential;</a></li>
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a859728">it shall maintain a written, up to date list of current Authorised Users and provide such list to the Provider within 5 Business Days of the Provider&apos;s written request at any time or times;</a></li>
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a674100">it shall permit the Provider or the Provider&apos;s designated auditor to audit the Services in order to establish the name and password of each Authorised User and the Customer&apos;s data processing facilities to audit compliance with this agreement. Each such audit may be conducted no more than once per quarter, at the Provider&apos;s expense, and this right shall be exercised with reasonable prior notice, in such a manner as not to substantially interfere with the Customer&apos;s normal conduct of business;</a></li>
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:16.72pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a496563">if any of the audits referred to in clause 2.2(e) reveal that any password has been provided to any individual who is not an Authorised User, then without prejudice to the Provider&apos;s other rights, the Customer shall promptly disable such passwords and the Provider shall not issue any new passwords to any such individual; and</a></li>
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a776211">if any of the audits referred to in clause 2.2(e) reveal that the Customer has underpaid Subscription Fees to the Provider, then without prejudice to the Provider&apos;s other rights, the Customer shall pay to the Provider an amount equal to such underpayment as calculated in accordance with the prices set out in paragraph 1 of Schedule 1 within 10 Business Days of the date of the relevant audit.</a></li>
                    </ol>
                </li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a793646">The Customer shall not access, store, distribute or transmit any Viruses, or any material during the course of its use of the Services that:</a>
                    <ol type="a" class="awlist7" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a555949">is unlawful, harmful, threatening, defamatory, obscene, infringing, harassing or racially or ethnically offensive;</a></li>
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a951157">facilitates illegal activity;</a></li>
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:14.06pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a765530">depicts sexually explicit images;</a></li>
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a587993">promotes unlawful violence;</a></li>
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a855026">is discriminatory based on race, gender, colour, religious belief, sexual orientation, disability; or</a></li>
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:16.72pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a631375">is otherwise illegal or causes damage or injury to any person or property;</a></li>
                    </ol>
                </li>
            </ol>
        </li>
    </ol>
    <p style="margin-top:12pt; margin-left:36pt; margin-bottom:6pt; text-align:justify; line-height:15pt;"><span style="font-family:Arial;">and the Provider reserves the right, without liability or prejudice to its other rights to the Customer, to disable the Customer&apos;s access to any material that breaches the provisions of this clause.</span></p>
    <ol start="4" type="1" class="awlist8" style="margin:0pt; padding-left:0pt;">
        <li style="margin-top:14pt; margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a1053926">The Customer shall not:</a>
            <ol type="a" class="awlist7" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a348904">except as may be allowed by any applicable law which is incapable of exclusion by agreement between the parties and except to the extent expressly permitted under this agreement:</a>
                    <ol type="i" class="awlist9" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                        <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-28.8pt; font-size:10pt;"><span style="width:19.22pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a342267"><span style="font-size:12pt;">attempt to copy, modify, duplicate, create derivative works from, frame, mirror, republish, download, display, transmit, or distribute all or any portion of the Software and/or Documentation (as applicable) in any form or media or by any means; or</span></a></li>
                        <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-28.8pt; font-size:10pt;"><span style="width:17pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a283548"><span style="font-size:12pt;">attempt to de-compile, reverse compile, disassemble, reverse engineer or otherwise reduce to human-perceivable form all or any part of the Software or the Services; or</span></a></li>
                    </ol>
                </li>
                <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a1020559">access all or any part of the Services and Documentation in order to build a product or service which competes with the Services and/or the Documentation; or</a></li>
                <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:14.06pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a543944">use the Services and/or Documentation to provide services to third parties; or</a></li>
                <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a973788">subject to clause 22.1, license, sell, rent, lease, transfer, assign, distribute, display, disclose, or otherwise commercially exploit, or otherwise make the Services and/or Documentation available to any third party except the Authorised Users, or</a></li>
                <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a153098">attempt to obtain, or assist third parties in obtaining, access to the Services and/or Documentation, other than as provided under this clause 2; or</a></li>
                <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:16.72pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a495433">introduce or permit the introduction of, any Virus or other vulnerability into the Services or the Provider&apos;s network and information systems.&nbsp;</a></li>
            </ol>
        </li>
        <li style="margin-top:14pt; margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a428221">The Customer shall use all reasonable endeavours to prevent any unauthorised access to, or use of, the Services and/or the Documentation and, in the event of any such unauthorised access or use, promptly notify the Provider.</a></li>
        <li style="margin-top:14pt; margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a907209">The rights provided under this clause 2 are granted to the Customer only, and shall not be considered granted to any subsidiary or holding company of the Customer.</a></li>
    </ol>
    <ol start="3" type="1" class="awlist10" style="margin:0pt; padding-left:0pt;">
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:25.99pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000002"></a><a name="a154220">Additional user subscriptions</a>
            <ol type="1" class="awlist3" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a541339">Subject to clause 3.2 and clause 3.3, the Customer may, from time to time during any Subscription Term, purchase additional User Subscriptions in excess of the number set out in paragraph 1 of Schedule 1 and the Provider shall grant access to the Services and the Documentation to such additional Authorised Users in accordance with the provisions of this agreement.</a></li>
            </ol>
            <ol type="1" class="awlist11" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a911140">If the Customer wishes to purchase additional User Subscriptions, the Customer shall notify the Provider in writing. The Provider shall evaluate such request for additional User Subscriptions and respond to the Customer with approval or rejection of the request. Where the Provider approves the request, the Provider shall activate the additional User Subscriptions within 10 days of its approval of the Customer&apos;s request unless agreed otherwise in writing.</a></li>
            </ol>
            <ol start="2" type="1" class="awlist12" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a801736">If the Provider approves the Customer&apos;s request to purchase additional User Subscriptions, the Customer shall, within 14 days of the date of the Provider&apos;s invoice, pay to the Provider the relevant fees for such additional User Subscriptions as set out in paragraph 2 of Schedule 1 and, if such additional User Subscriptions are purchased by the Customer part way through the Initial Subscription Term or any Renewal Period (as applicable), such fees shall be pro-rated from the date of activation by the Provider for the remainder of the Initial Subscription Term or then current Renewal Period (as applicable).</a></li>
            </ol>
        </li>
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:25.99pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000003"></a><a name="a207627">Services</a>
            <ol type="1" class="awlist3" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a381119">The Provider shall, during the Subscription Term, provide the Services and make available the Documentation to the Customer on and subject to the terms of this agreement.</a></li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a789714">The Provider shall use commercially reasonable endeavours to make the Services available 24 hours a day, seven days a week, except for:</a>
                    <ol type="a" class="awlist7" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a142199">planned maintenance carried out during a reasonable maintenance window; and</a></li>
                    </ol>
                    <ol start="2" type="a" class="awlist13" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a84747">unscheduled maintenance performed outside Normal Business Hours, provided that the Provider has used reasonable endeavours to give the Customer 4 Normal Business Hours&rsquo; notice in advance.</a></li>
                    </ol>
                </li>
            </ol>
            <ol start="3" type="1" class="awlist14" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a522681">The Provider will, as part of the Services provide the Customer with the Provider&apos;s standard customer support services during Normal Business hours</a>.&nbsp;</li>
            </ol>
        </li>
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:25.99pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000004"></a><a name="a391801">Data protection</a></li>
    </ol>
    <p style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-align:justify; page-break-after:avoid; line-height:15pt;"><span style="font-family:Arial;">The Customer retains ownership of its data and grants Provider a non-exclusive, perpetual, irrevocable license to process, store, and use such data as necessary to provide the Service. Details about how Provider processes this personal data, the purposes for which we carry out processing and the legal basis (or bases) upon which Provider carries out such processing is detailed in Provider&rsquo;s privacy policy (available here: https://longevity-partners.com/privacy-policy/).</span></p>
    <p style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-align:justify; page-break-after:avoid; line-height:15pt;"><span style="font-family:Arial;">In the event Customer provides Provider with any personal data about anyone outside of Customer&rsquo;s organisation, Customer shall ensure that it has appropriate legal authority to do so. By providing such information, Customer confirms that it has all appropriate legal authority to do so.&nbsp;</span></p>
    <ol start="6" type="1" class="awlist15" style="margin:0pt; padding-left:0pt;">
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial;"><span style="width:25.99pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000005"></a><a name="a248076"><strong>Third party providers</strong></a><strong>&nbsp;and content</strong>
            <ol type="1" class="awlist3" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-top:14pt; margin-bottom:6pt;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a465229">The Customer acknowledges that the Services may contain, enable or assist it to access the content of, correspond with, and/or purchase products and services from, third parties via third-party websites including but not limited to links, articles, videos, software, or other materials (collectively, &lsquo;Third-Party Content&rsquo;). The Provider does not endorse or guarantee the accuracy, completeness, legality, or reliability of any Third-Party Content, nor does it make any representations, warranties, or commitments regarding the ongoing availability or accuracy of such content.&nbsp;</a></li>
                <li style="margin-top:14pt; margin-bottom:6pt;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Any contract entered into, and any transaction completed via any third-party website, is between the Customer and the relevant third party, and not the Provider.&nbsp; The Provider recommends that the Customer refers to the third party&apos;s website terms and conditions and privacy policy prior to using the relevant third-party website. The Provider does not endorse or approve any third-party website nor the content of any of the third-party website made available via the Services.</li>
            </ol>
        </li>
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:25.99pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000006"></a><a name="a646812">Provider&apos;s obligations</a>
            <ol type="1" class="awlist3" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a836484">The Provider shall perform the Services substantially in accordance with the Documentation and with reasonable skill and care.</a></li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a736307">The Provider&apos;s obligations at clause 7.1 shall not apply to the extent of any non-conformance which is caused by use of the Services contrary to the Provider&apos;s instructions, or modification or alteration of the Services by any party other than the Provider or the Provider&apos;s duly authorised contractors or agents. If the Services do not conform with the terms of clause 7.1, Provider will, at its expense, use reasonable commercial endeavours to correct any such non-conformance promptly. Such correction constitutes the Customer&apos;s sole and exclusive remedy for any breach of the undertaking set out in clause 7.1.&nbsp;&nbsp;</a></li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a188652">The Provider:</a>
                    <ol type="a" class="awlist7" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a302418">does not warrant that:</a>
                            <ol type="i" class="awlist9" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                                <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-28.8pt; font-size:10pt;"><span style="width:19.22pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a148941"><span style="font-size:12pt;">&nbsp;</span><span style="font-size:12pt;">the Customer&apos;s use of the Services will be uninterrupted or error-free;&nbsp;</span></a></li>
                                <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-28.8pt; font-size:10pt;"><span style="width:17pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a357996"><span style="font-size:12pt;">the Software or the Services will be free from Viruses or other vulnerabilities;&nbsp;</span></a><span style="font-size:12pt;">or&nbsp;</span></li>
                                <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-28.8pt; font-size:10pt;"><span style="width:14.77pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a604086"><span style="font-size:12pt;">the Software, Documentation or Services will comply with any cybersecurity requirements.</span></a></li>
                            </ol>
                        </li>
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a587661">is not responsible for any delays, delivery failures, or any other loss or damage resulting from the transfer of data over communications networks and facilities, including the internet, and the Customer acknowledges that the Services and Documentation may be subject to limitations, delays and other problems inherent in the use of such communications facilities.</a></li>
                    </ol>
                </li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a1026977">This agreement shall not prevent the Provider from entering into similar agreements with third parties, or from independently developing, using, selling or licensing documentation, products and/or services which are similar to those provided under this agreement.</a></li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a414097">The Provider warrants that it has and will maintain all necessary licences, consents, and permissions necessary for the performance of its obligations under this agreement.</a></li>
            </ol>
            <ol start="6" type="1" class="awlist16" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a352298">The Provider shall follow its archiving procedures for Customer Data as set out in its internal Back-Up Policy. In the event of any loss or damage to Customer Data, the Customer&apos;s sole and exclusive remedy against the Provider shall be for the Provider to use reasonable commercial endeavours to restore the lost or damaged Customer Data from the latest back-up of such Customer Data maintained by the Provider in accordance with its archiving procedure. The Provider shall not be responsible for any loss, destruction, alteration or disclosure of Customer Data caused by any third party save for sub-contractors engaged to provide the services.&nbsp;</a></li>
            </ol>
        </li>
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:25.99pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000007"></a><a name="a783898">Customer&apos;s obligations</a>
            <ol type="1" class="awlist3" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a674493">The Customer shall:</a>
                    <ol type="a" class="awlist7" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a471548">provide the Provider with:</a>
                            <ol type="i" class="awlist9" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                                <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-28.8pt; font-size:10pt;"><span style="width:19.22pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a80385"><span style="font-size:12pt;">all necessary co-operation in relation to this agreement; and</span></a></li>
                                <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-28.8pt; font-size:10pt;"><span style="width:17pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a253877"><span style="font-size:12pt;">all necessary access to such information as may be required by the Provider;</span></a></li>
                            </ol>
                        </li>
                    </ol>
                </li>
            </ol>
        </li>
    </ol>
    <p style="margin-top:0pt; margin-left:77.95pt; margin-bottom:12pt; text-align:justify; line-height:15pt;"><span style="font-family:Arial;">in order to provide the Services, including but not limited to Customer Data, security access information and configuration services;</span></p>
    <ol start="2" type="a" class="awlist17" style="margin:0pt; padding-left:0pt;">
        <li style="margin-left:77.75pt; margin-bottom:6pt; text-indent:-28.05pt; text-align:justify; line-height:15pt; font-family:Arial;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a264558">without affecting its other obligations under this agreement, comply with all applicable laws and regulations with respect to its activities under this agreement;</a></li>
        <li style="margin-left:77.75pt; margin-bottom:6pt; text-indent:-28.05pt; text-align:justify; line-height:15pt; font-family:Arial;"><span style="width:14.06pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a232514">carry out all other Customer responsibilities set out in this agreement in a timely and efficient manner. In the event of any delays in the Customer&apos;s provision of such assistance as agreed by the parties, the Provider may adjust any agreed timetable or delivery schedule as reasonably necessary;</a></li>
        <li style="margin-left:77.75pt; margin-bottom:6pt; text-indent:-28.05pt; text-align:justify; line-height:15pt; font-family:Arial;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a328646">ensure that the Authorised Users use the Services and the Documentation in accordance with the terms and conditions of this agreement and shall be responsible for any Authorised User&apos;s breach of this agreement;</a></li>
        <li style="margin-left:77.75pt; margin-bottom:6pt; text-indent:-28.05pt; text-align:justify; line-height:15pt; font-family:Arial;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a1040249">obtain and shall maintain all necessary licences, consents, and permissions necessary for the Provider, its contractors and agents to perform their obligations under this agreement, including without limitation the Services;</a> and</li>
        <li style="margin-left:77.75pt; margin-bottom:6pt; text-indent:-28.05pt; text-align:justify; line-height:15pt; font-family:Arial;"><span style="width:16.72pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a1044295">be, to the extent permitted by law and except as otherwise expressly provided in this agreement, solely responsible for procuring, maintaining and securing its network connections and telecommunications links from its systems to the Provider&apos;s data centres, and all problems, conditions, delays, delivery failures and all other loss or damage arising from or relating to the Customer&apos;s network connections or telecommunications links or caused by the internet.</a></li>
    </ol>
    <ol start="2" type="1" class="awlist18" style="margin:0pt; padding-left:0pt;">
        <li style="margin-top:14pt; margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a101858">The Customer shall own all right, title and interest in and to all of the Customer Data that is not personal data and shall have sole responsibility for the legality, reliability, integrity, accuracy and quality of all such Customer Data.</a></li>
    </ol>
    <ol start="9" type="1" class="awlist19" style="margin:0pt; padding-left:0pt;">
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:25.99pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000008"></a><a name="a627723">Charges and payment</a>
            <ol type="1" class="awlist20" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a877439">The Customer shall pay the Subscription Fees to the Provider for the Services and User Subscriptions in accordance with the terms of the Order Letter.&nbsp;&nbsp;&nbsp;</a></li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a468771">The Provider shall be entitled to increase the Subscription Fees, the fees payable in respect of the additional User Subscriptions purchased pursuant to clause <span style="background-color:#c0c0c0;">3.2</span>, the support fees payable pursuant to clause <span style="background-color:#c0c0c0;">4.3</span> at the start of each Renewal Period upon 90 days&apos; prior notice to the Customer</a>.</li>
            </ol>
        </li>
    </ol>
    <ol start="10" type="1" class="awlist21" style="margin:0pt; padding-left:0pt;">
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000009"></a><a name="a872071">Proprietary rights</a>
            <ol type="1" class="awlist3" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a131014">The Customer acknowledges and agrees that the Provider and/or its licensors own all intellectual property rights in the Services and the Documentation. Except as expressly stated herein, this agreement does not grant the Customer any rights to, under or in, any patents, copyright, database right, trade secrets, trade names, trademarks (whether registered or unregistered), or any other rights or licences in respect of the Services or the Documentation.</a></li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a885343">The Provider confirms that it has all the rights in relation to the Services and the Documentation that are necessary to grant all the rights it purports to grant under, and in accordance with, the terms of this agreement.</a></li>
            </ol>
        </li>
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000010"></a><a name="a622355">Confidentiality&nbsp;</a>
            <ol type="1" class="awlist3" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-top:14pt; margin-bottom:6pt;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a811676">Confidential Information<span style="font-weight:normal;">&nbsp;means all confidential information (however recorded or preserved) disclosed by a party or its Representatives (as defined below) to the other party and that party&apos;s Representatives in connection with the Services and Platform including but not limited to:</span></a>
                    <ol type="a" class="awlist7" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt; font-weight:normal;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a432058">the terms of this agreement</a>;</li>
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt; font-weight:normal;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a159289">any information that would be regarded as confidential by a reasonable business person relating to:</a>
                            <ol type="i" class="awlist9" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                                <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-28.8pt; font-size:10pt;"><span style="width:19.22pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a941556"><span style="font-size:12pt;">the business, assets, affairs, customers, Customers, Providers, of the disclosing party (or of any member of the group of companies to which the disclosing party belongs); and</span></a></li>
                                <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-28.8pt; font-size:10pt;"><span style="width:17pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a854244"><span style="font-size:12pt;">the operations, processes, product information, know-how, designs, trade secrets or software of the disclosing party (or of any member of the group of companies to which the disclosing party belongs);</span></a></li>
                            </ol>
                        </li>
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt; font-weight:normal;"><span style="width:14.06pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a218376">any information developed by the parties in the course of carrying out this agreement and the parties agree that:&nbsp;</a>
                            <ol type="i" class="awlist9" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                                <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-28.8pt; font-size:10pt;"><span style="width:19.22pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a449840"><span style="font-size:12pt;">details of the Services, and the results of any performance tests of the Services, shall constitute Provider Confidential Information; and</span></a></li>
                                <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-28.8pt; font-size:10pt;"><span style="width:17pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a931085"><span style="font-size:12pt;">Customer Data shall constitute Customer Confidential Information;</span></a></li>
                            </ol>
                        </li>
                    </ol>
                </li>
            </ol>
        </li>
    </ol>
    <p style="margin-top:12pt; margin-left:36pt; margin-bottom:6pt; text-align:justify; line-height:15pt;"><strong><span style="font-family:Arial;">Representatives</span></strong><span style="font-family:Arial;">&nbsp;means, in relation to a party, its employees, officers, contractors, subcontractors, representatives and advisers.&nbsp;</span></p>
    <ol start="2" type="1" class="awlist22" style="margin:0pt; padding-left:0pt;">
        <li style="margin-top:14pt; margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a246730">The provisions of this clause shall not apply to any Confidential Information that:&nbsp;</a>
            <ol type="a" class="awlist7" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a454891">is or becomes generally available to the public (other than as a result of its disclosure by the receiving party or its Representatives in breach of this clause);</a></li>
                <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a194401">was available to the receiving party on a non-confidential basis before disclosure by the disclosing party;</a></li>
                <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:14.06pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a653003">was, is or becomes available to the receiving party on a non-confidential basis from a person who, to the receiving party&apos;s knowledge, is not bound by a confidentiality agreement with the disclosing party or otherwise prohibited from disclosing the information to the receiving party;&nbsp;</a></li>
                <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a164390">the parties agree in writing is not confidential or may be disclosed; or</a></li>
            </ol>
        </li>
        <li style="margin-top:14pt; margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a983265">Each party shall keep the other party&apos;s Confidential Information secret and confidential and shall not:</a>
            <ol type="a" class="awlist7" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a793364">use such Confidential Information except for the purpose of exercising or performing its rights and obligations under or in connection with this agreement (<strong>Permitted Purpose</strong>); or</a></li>
                <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a528766">disclose such Confidential Information in whole or in part to any third party, except as expressly permitted by this clause 11.</a></li>
            </ol>
        </li>
        <li style="margin-top:14pt; margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a469489">A party may disclose the other party&apos;s Confidential Information to those of its Representatives who need to know such Confidential Information for the Permitted Purpose, provided that:</a>
            <ol type="a" class="awlist7" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a957272">it informs such Representatives of the confidential nature of the Confidential Information before disclosure; and</a></li>
                <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a618722">at all times, it is responsible for such Representatives&apos; compliance with the confidentiality obligations set out in this clause.</a></li>
            </ol>
        </li>
        <li style="margin-top:14pt; margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a841356">A party may disclose Confidential Information to the extent such Confidential Information is required to be disclosed by law, by any governmental or other regulatory authority (including, without limitation, or by a court or other authority of competent jurisdiction provided that, to the extent it is legally permitted to do so, it gives the other party as much notice of such disclosure as possible and, where notice of disclosure is not prohibited and is given in accordance with this clause 11.5, it takes into account the reasonable requests of the other party in relation to the content of such disclosure.</a></li>
        <li style="margin-top:14pt; margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a862414">Each party reserves all rights in its Confidential Information. No rights or obligations in respect of a party&apos;s Confidential Information other than those expressly stated in this agreement are granted to the other party, or to be implied from this agreement.</a></li>
        <li style="margin-top:14pt; margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a357138">On termination of this agreement, each party shall:</a>
            <ol type="a" class="awlist7" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a821165">destroy or return to the other party all documents and materials (and any copies) containing, reflecting, incorporating or based on the other party&apos;s Confidential Information;</a></li>
                <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a709830">erase all the other party&apos;s Confidential Information from computer and communications systems and devices used by it, including such systems and data storage services provided by third parties (to the extent technically and legally practicable); and</a></li>
                <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:14.06pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a414410">certify in writing to the other party that it has complied with the requirements of this clause, provided that a recipient party may retain documents and materials containing, reflecting, incorporating or based on the other party&apos;s Confidential Information to the extent required by law or any applicable governmental or regulatory authority.&nbsp;</a></li>
            </ol>
        </li>
        <li style="margin-top:14pt; margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a1017310">No party shall make, or permit any person to make, any public announcement concerning this agreement without the prior written consent of the other parties (such consent not to be unreasonably withheld or delayed), except as required by law, any governmental or regulatory authority (including, without limitation, any relevant securities exchange), any court or other authority of competent jurisdiction.</a></li>
        <li style="margin-top:14pt; margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a927990">Except as expressly stated in this agreement, no party makes any express or implied warranty or representation concerning its Confidential Information.</a></li>
        <li style="margin-top:14pt; margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial;"><span style="width:5.97pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a981475">The above provisions of this clause 11 shall continue to apply after termination or expiry of this agreement</a>.</li>
    </ol>
    <ol start="12" type="1" class="awlist23" style="margin:0pt; padding-left:0pt;">
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000011"></a><a name="a333959">Indemnity</a>
            <ol type="1" class="awlist3" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a276508">The Customer shall defend, indemnify and hold harmless the Provider against claims, actions, proceedings, losses, damages, expenses and costs (including without limitation court costs and reasonable legal fees) arising out of or in connection with the Customer&apos;s use of the Services and/or Documentation, provided that:</a>
                    <ol type="a" class="awlist7" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a714442">the Customer is given prompt notice of any such claim;</a></li>
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a135059">the Provider provides reasonable co-operation to the Customer in the defence and settlement of such claim, at the Customer&apos;s expense; and</a></li>
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:14.06pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a607629">the Customer is given sole authority to defend or settle the claim.</a></li>
                    </ol>
                </li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a406858">In the defence or settlement of any claim, the Provider may procure the right for the Customer to continue using the Services, replace or modify the Services so that they become non-infringing or, if such remedies are not reasonably available, terminate this agreement on 7 Business Days&apos; notice to the Customer without any additional liability or obligation to pay liquidated damages or other additional costs to the Customer.</a></li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a278782">In no event shall the Provider, its employees, agents and sub-contractors be liable to the Customer to the extent that the alleged infringement is based on:</a>
                    <ol type="a" class="awlist7" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a691308">a modification of the Services or Documentation by anyone other than the Provider; or</a></li>
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a453728">the Customer&apos;s use of the Services or Documentation in a manner contrary to the instructions given to the Customer by the Provider; or</a></li>
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:14.06pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a635310">the Customer&apos;s use of the Services or Documentation after notice of the alleged or actual infringement from the Provider or any appropriate authority; or</a></li>
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a197417">the Customer&apos;s breach of this agreement.</a></li>
                    </ol>
                </li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a90563">The foregoing states the Customer&apos;s sole and exclusive rights and remedies, and the Provider&apos;s (including the Provider&apos;s employees&apos;, agents&apos; and sub-contractors&apos;) entire obligations and liability, for infringement of any patent, copyright, trade mark, database right or right of confidentiality.</a></li>
            </ol>
        </li>
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000012"></a><a name="a990385">Limitation of liability</a>
            <ol type="1" class="awlist3" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a710080">Except as expressly and specifically provided in this agreement:</a>
                    <ol type="a" class="awlist24" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a866254">the Customer assumes sole responsibility for results obtained from the use of the Services and the Documentation by the Customer, and for conclusions drawn from such use. The Provider shall have no liability for any damage caused by errors or omissions in any Customer Data, information, instructions or any third-party data provided to the Provider by the Customer in connection with the Services, or any actions taken by the Provider at the Customer&apos;s direction;</a></li>
                    </ol>
                    <ol start="2" type="a" class="awlist17" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a663309">all warranties, representations, conditions and all other terms of any kind whatsoever implied by statute or common law are, to the fullest extent permitted by applicable law, excluded from this agreement; and</a></li>
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:14.06pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a272145">the Services and the Documentation are provided to the Customer on an &quot;as is&quot; basis.</a></li>
                    </ol>
                </li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a445638">Nothing in this agreement excludes the liability of the Provider:</a>
                    <ol type="a" class="awlist7" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a456319">for death or personal injury caused by the Provider&apos;s negligence; or</a></li>
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a424275">for fraud or fraudulent misrepresentation.</a></li>
                    </ol>
                </li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a394157">Subject to clause 13.1 and clause 13.2:</a>
                    <ol type="a" class="awlist7" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a966431">the Provider shall have no liability for any:</a>
                            <ol type="i" class="awlist25" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                                <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-28.8pt; font-size:10pt;"><span style="width:19.22pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a304940"><span style="font-size:12pt;">loss of profits,&nbsp;</span></a></li>
                                <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-28.8pt; font-size:10pt;"><span style="width:17pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a820213"><span style="font-size:12pt;">loss of business,&nbsp;</span></a></li>
                                <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-28.8pt; font-size:10pt;"><span style="width:14.77pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a175800"><span style="font-size:12pt;">wasted expenditure,&nbsp;</span></a></li>
                                <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-28.8pt; font-size:10pt;"><span style="width:14.22pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a539007"><span style="font-size:12pt;">depletion of goodwill and/or similar losses,&nbsp;</span></a></li>
                                <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-28.8pt; font-size:10pt;"><span style="width:16.44pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a730549"><span style="font-size:12pt;">loss or corruption of data or information, or</span></a></li>
                                <li style="margin-left:36pt; margin-bottom:6pt; text-indent:-28.8pt; font-size:10pt;"><span style="width:14.22pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a422653"><span style="font-size:12pt;">any special, indirect or consequential loss, costs, damages, charges or expenses; and</span></a></li>
                            </ol>
                        </li>
                    </ol>
                    <ol start="2" type="a" class="awlist13" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a97199">the Provider&apos;s total maximum aggregate liability to the Customer (including in respect of the indemnity at clause 12.2), in respect of all breaches of duty occurring within any contract year shall not exceed the greater of GBP 250,000 or 100% of the total Subscription Fees paid in the contract year in which the breaches occurred. A contract year means a 12-month period commencing on the Effective Date or any anniversary of it. If breaches committed in more than one contract year give rise to a single claim or a series of connected claims, the Provider&rsquo;s total liability for those claims shall not exceed the single highest annual cap for those contract years.</a></li>
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:14.06pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Client agrees that any claims, actions, or proceedings arising out of or related to this Agreement shall be brought solely against Provider and not against any of Provider&apos;s Affiliates. Provider shall remain fully responsible and liable for all obligations under this Agreement, including those performed by its Affiliates.</li>
                    </ol>
                </li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a656813">References to liability in this clause 13 include every kind of liability arising under or in connection with this agreement including but not limited to liability in contract, tort (including negligence), misrepresentation, restitution or otherwise.</a></li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a738740">Nothing in this agreement excludes the liability of the Customer for any breach, infringement or misappropriation of the Provider&rsquo;s Intellectual Property Rights.</a></li>
            </ol>
        </li>
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000013"></a><a name="a236056">Term and termination</a>
            <ol type="1" class="awlist26" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a819484">This agreement shall, unless otherwise terminated as provided in this clause 14, commence on the Effective Date and shall continue for the Initial Subscription Term and, thereafter, this agreement shall be automatically renewed for successive periods of 12 months (each a <strong>Renewal Period</strong>), unless:&nbsp;</a>
                    <ol type="a" class="awlist7" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a135780">either party notifies the other party of termination, in writing, at least 60 days before the end of the Initial Subscription Term or any Renewal Period, in which case this agreement shall terminate upon the expiry of the applicable Initial Subscription Term or Renewal Period; or</a></li>
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a214594">otherwise terminated in accordance with the provisions of this agreement;</a></li>
                    </ol>
                </li>
            </ol>
        </li>
    </ol>
    <p style="margin-top:12pt; margin-left:36pt; margin-bottom:6pt; text-align:justify; line-height:15pt;"><span style="font-family:Arial;">and the Initial Subscription Term together with any subsequent Renewal Periods shall constitute the&nbsp;</span><strong><span style="font-family:Arial;">Subscription Term</span></strong><span style="font-family:Arial;">.</span></p>
    <ol start="2" type="1" class="awlist27" style="margin:0pt; padding-left:0pt;">
        <li style="margin-top:14pt; margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a743645">The remaining termination provisions applicable to the Order Letter relating to material breach and insolvency shall apply to this Agreement.&nbsp;</a></li>
        <li style="margin-top:14pt; margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; text-align:justify; line-height:15pt; font-family:Arial;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a964212">On termination of this agreement for any reason:</a>
            <ol type="a" class="awlist7" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a615774">all licences granted under this agreement shall immediately terminate</a>;</li>
                <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a661090">each party shall return and make no further use of any equipment, property, Documentation and other items (and all copies of them) belonging to the other party;</a></li>
                <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:14.06pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a1056299">the Provider may destroy or otherwise dispose of any of the Customer Data in its possession unless the Provider receives, no later than ten days after the effective date of the termination of this agreement, a written request for the delivery to the Customer of the then most recent back-up of the Customer Data. The Provider shall use reasonable commercial endeavours to deliver the back-up to the Customer within 30 days of its receipt of such a written request, provided that the Customer has, at that time, paid all fees and charges outstanding at and resulting from termination (whether or not due at the date of termination). The Customer shall pay all reasonable expenses incurred by the Provider in returning or disposing of Customer Data; and</a></li>
                <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a384583">any rights, remedies, obligations or liabilities of the parties that have accrued up to the date of termination, including the right to claim damages in respect of any breach of the agreement which existed at or before the date of termination shall not be affected or prejudiced.</a></li>
            </ol>
        </li>
    </ol>
    <ol start="15" type="1" class="awlist28" style="margin:0pt; padding-left:0pt;">
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000014"></a><a name="a693134">Force majeure</a></li>
    </ol>
    <p style="margin-top:14pt; margin-left:36pt; margin-bottom:6pt; text-align:justify; line-height:15pt;"><a name="a960167"><span style="font-family:Arial;">Neither party shall be in breach of this agreement or otherwise liable for any failure or delay in the performance of its obligations if such delay or failure results from events, circumstances or causes beyond its reasonable control. The time for performance of such obligations shall be extended accordingly. If the period of delay or non-performance continues for four weeks, the party not affected may terminate this agreement by giving 14 days&apos; written notice to the affected party.</span></a></p>
    <ol start="16" type="1" class="awlist29" style="margin:0pt; padding-left:0pt;">
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000015"></a><a name="a164320">Conflict</a></li>
    </ol>
    <p style="margin-top:14pt; margin-left:36pt; margin-bottom:6pt; text-align:justify; line-height:15pt;"><a name="a559529"><span style="font-family:Arial;">If there is an inconsistency between any of the provisions in the main body of this agreement and the Order Letter, the provisions in the main body of this agreement shall prevail.</span></a></p>
    <ol start="17" type="1" class="awlist30" style="margin:0pt; padding-left:0pt;">
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000016"></a><a name="a594084">Variation</a></li>
    </ol>
    <p style="margin-top:14pt; margin-left:36pt; margin-bottom:6pt; text-align:justify; line-height:15pt;"><a name="a373901"><span style="font-family:Arial;">No variation of this agreement shall be effective unless it is in writing and signed by the parties (or their authorised representatives).</span></a></p>
    <ol start="18" type="1" class="awlist31" style="margin:0pt; padding-left:0pt;">
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000017"></a><a name="a893488">Waiver</a>
            <ol type="1" class="awlist3" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a811444">A waiver of any right or remedy is only effective if given in writing</a>.</li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a284683">A delay or failure to exercise, or the single or partial exercise of, any right or remedy shall not waive that or any other right or remedy, nor shall it prevent or restrict the further exercise of that or any other right or remedy.</a></li>
            </ol>
        </li>
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000018"></a><a name="a949188">Rights and remedies</a></li>
    </ol>
    <p style="margin-top:14pt; margin-left:36pt; margin-bottom:6pt; text-align:justify; line-height:15pt;"><a name="a515299"><span style="font-family:Arial;">Except as expressly provided in this agreement, the rights and remedies provided under this agreement are in addition to, and not exclusive of, any rights or remedies provided by law.</span></a></p>
    <ol start="20" type="1" class="awlist32" style="margin:0pt; padding-left:0pt;">
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000019"></a><a name="a310060">Severance</a>
            <ol type="1" class="awlist3" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a312652">If any provision or part-provision of this agreement is or becomes invalid, illegal or unenforceable, it shall be deemed deleted, but that shall not affect the validity and enforceability of the rest of this agreement.</a></li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a836036">If any provision or part-provision of this agreement is deemed deleted under clause 20.1 the parties shall negotiate in good faith to agree a replacement provision that, to the greatest extent possible, achieves the intended commercial result of the original provision.</a></li>
            </ol>
        </li>
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000020"></a><a name="a1000301">Entire agreement</a>
            <ol type="1" class="awlist3" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a241927">This agreement constitutes the entire agreement between the parties and supersedes and extinguishes all previous and contemporaneous agreements, promises, assurances and understandings between them, whether written or oral, relating to its subject matter.</a></li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a984731">Each party acknowledges that in entering into this agreement it does not rely on, and shall have no remedies in respect of, any statement, representation, assurance or warranty (whether made innocently or negligently) that is not set out in this agreement.</a></li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a991046">Each party agrees that it shall have no claim for innocent or negligent misrepresentation based on any statement in this agreement.</a></li>
            </ol>
        </li>
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000021"></a><a name="a160522">Assignment</a>
            <ol type="1" class="awlist3" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a761267">The Customer shall not, without the prior written consent of the Provider, assign, transfer, mortgage, charge, subcontract, delegate, declare a trust over or deal in any other manner with any of its rights and obligations under this agreement.</a></li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a224610">The Provider may at any time assign, mortgage, charge, subcontract, delegate, declare a trust over or deal in any other manner with any or all of its rights and obligations under this agreement</a>.</li>
            </ol>
        </li>
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000022"></a><a name="a569003">No partnership or agency</a></li>
    </ol>
    <p style="margin-top:14pt; margin-left:36pt; margin-bottom:6pt; text-align:justify; line-height:15pt;"><a name="a66981"><span style="font-family:Arial;">Nothing in this agreement is intended to or shall operate to create a partnership between the parties, or authorise either party to act as agent for the other, and neither party shall have the authority to act in the name or on behalf of or otherwise to bind the other in any way (including, but not limited to, the making of any representation or warranty, the assumption of any obligation or liability and the exercise of any right or power).</span></a></p>
    <ol start="24" type="1" class="awlist33" style="margin:0pt; padding-left:0pt;">
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000023"></a><a name="a573048">Third party rights</a>
            <ol type="1" class="awlist34" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a789266">This agreement does not give rise to any rights under the Contracts (Rights of Third Parties) Act 1999 to enforce any term of this agreement.</a></li>
            </ol>
        </li>
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000024"></a><a name="a355283">Counterparts</a>
            <ol type="1" class="awlist3" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a521787">This agreement may be executed in any number of counterparts, each of which shall constitute a duplicate original, but all the counterparts shall together constitute the one agreement.</a></li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a851073">This Agreement may be executed in multiple counterparts, each of which will be deemed an original, but all of which together will constitute one and the same instrument. By clicking &quot;I Agree&quot; or taking any similar action to accept the terms of this Agreement, the User acknowledges and agrees that the Agreement is valid, binding, and effective as if it had been signed by the parties in writing.&nbsp;</a></li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>No counterpart shall be effective until each party has provided to the other(s) at least one executed counterpart.</li>
            </ol>
        </li>
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000025"></a><a name="a671771">Notices</a>
            <ol type="1" class="awlist35" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="a86573">Any notices, requests, or communications under this Agreement must be made in writing and will be deemed to have been properly given if delivered in the following manner:</a></li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>To the Customer:<ol type="a" class="awlist24" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Notices to the Customer will be sent to the email address provided during registration or the most recent email address provided by the Customer. Notices may also be provided through the platform via in-app messaging or other notifications.</li>
                    </ol>
                </li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>To the Provider:<ol type="a" class="awlist24" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Notices to the Provider must be sent via email to <span style=">info@longevity-partners.com</span> or to the address specified in the Order Letter, or through the designated platform for such communication.</li>
                    </ol>
                </li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Effective Date of Notice:<ol type="a" class="awlist24" style="margin-right:0pt; margin-left:0pt; padding-left:0pt;">
                        <li style="margin-left:41.75pt; margin-bottom:6pt; text-indent:-28.05pt;"><span style="width:13.38pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Any notice sent by email will be deemed effective upon transmission, provided that no &quot;bounce-back&quot; or error message is received. If the notice is sent through the platform, it will be deemed effective once posted and the Customer has acknowledged it (such as by clicking &ldquo;OK&rdquo; or similar actions).</li>
                    </ol>
                </li>
                <li style="margin-top:14pt; margin-bottom:6pt; font-weight:normal;"><span style="width:12.64pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Each party agrees to promptly update their contact information if it changes during the term of this agreement. The Provider may update the Customer&rsquo;s contact information via the platform if needed. This clause does not apply to the service of any proceedings or other documents in any legal action or, where applicable, any arbitration or other method of dispute resolution.</li>
            </ol>
        </li>
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000026"></a><a name="a196364">Governing law</a></li>
    </ol>
    <p style="margin-top:14pt; margin-left:36pt; margin-bottom:6pt; text-align:justify; line-height:15pt;"><a name="a463397"><span style="font-family:Arial;">This agreement and any dispute or claim arising out of or in connection with it or its subject matter or formation (including non-contractual disputes or claims) shall be governed by and interpreted in accordance with the law of England and Wales.</span></a></p>
    <ol start="28" type="1" class="awlist36" style="margin:0pt; padding-left:0pt;">
        <li style="margin-top:12pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; text-align:justify; page-break-after:avoid; line-height:15pt; font-family:Arial; font-weight:bold;"><span style="width:19.32pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a name="_Toc256000027"></a><a name="a201476">Jurisdiction</a></li>
    </ol>
    <p style="margin-top:14pt; margin-left:36pt; margin-bottom:6pt; text-align:justify; line-height:15pt;"><a name="a662297"><span style="font-family:Arial;">Each party irrevocably agrees that the courts of England and Wales shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with this agreement or its subject matter or formation (including non-contractual disputes or claims).</span></a></p>
    <p style="margin-top:0pt; margin-bottom:6pt; text-align:justify; line-height:15pt;"><span style="font-family:Arial;">This has been entered into on the date stated at the beginning of it.</span></p>

    <p style="margin-top:14pt; margin-bottom:14pt; line-height:normal;"><span style="font-family:Arial;">By clicking the &quot;I Agree&quot; button below, you confirm that you have read, understood, and accept the terms and conditions of this Agreement.</span></p>
</div>
        `,
      }}
    ></div>
    </DialogDescription>
  );
}

export default SubscriptionAgreement;


