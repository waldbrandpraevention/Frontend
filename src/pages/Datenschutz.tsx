import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/header";
import styled from "styled-components";

const DatenschutzText = () => {
  return (
    <div>
      <p>
        Personenbezogene Daten (nachfolgend zumeist nur „Daten“ genannt) werden
        von uns nur im Rahmen der Erforderlichkeit sowie zum Zwecke der
        Bereitstellung eines funktionsfähigen und nutzerfreundlichen
        Internetauftritts, inklusive seiner Inhalte und der dort angebotenen
        Leistungen, verarbeitet.
      </p>
      <p>
        Gemäß Art. 4 Ziffer 1. der Verordnung (EU) 2016/679, also der
        Datenschutz-Grundverordnung (nachfolgend nur „DSGVO“ genannt), gilt als
        „Verarbeitung“ jeder mit oder ohne Hilfe automatisierter Verfahren
        ausgeführter Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit
        personenbezogenen Daten, wie das Erheben, das Erfassen, die
        Organisation, das Ordnen, die Speicherung, die Anpassung oder
        Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung
        durch Übermittlung, Verbreitung oder eine andere Form der
        Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung,
        das Löschen oder die Vernichtung.
      </p>
      <p>
        Mit der nachfolgenden Datenschutzerklärung informieren wir Sie
        insbesondere über Art, Umfang, Zweck, Dauer und Rechtsgrundlage der
        Verarbeitung personenbezogener Daten, soweit wir entweder allein oder
        gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung
        entscheiden. Zudem informieren wir Sie nachfolgend über die von uns zu
        Optimierungszwecken sowie zur Steigerung der Nutzungsqualität
        eingesetzten Fremdkomponenten, soweit hierdurch Dritte Daten in wiederum
        eigener Verantwortung verarbeiten.
      </p>
      <p>Unsere Datenschutzerklärung ist wie folgt gegliedert:</p>
      <p>
        {" "}
        I. Informationen über uns als Verantwortliche
        <br />
        II. Rechte der Nutzer und Betroffenen
        <br />
        III. Informationen zur Datenverarbeitung
      </p>
      <h3>I. Informationen über uns als Verantwortliche</h3>
      <p>
        Verantwortlicher Anbieter dieses Internetauftritts im
        datenschutzrechtlichen Sinne ist:
      </p>
      Urban Software Institute GmbH
      <br />
      Sitz: Zwickauer Str. 223a
      <br />
      09116 Chemnitz, Germany
      <p>
        Telefon: +49 (0)371 85 798 59
        <br />
        Telefax: +49 (0)371 85 798 54
        <br />
        E-Mail: datenschutz@ui.city
      </p>
      <p>Datenschutzbeauftragte/r beim Anbieter ist:</p>
      mip Consult GmbH
      <br />
      Wilhelm-Kabus-Str. 9
      <br />
      10829 Berlin
      <br />
      Name: Rechtsanwalt Eggert
      <br />
      Vorname: Asmus
      <br />
      E-Mail: a.eggert@mip-consult.de
      <br />
      Telefon: +49-(0)30-20 88 999 – 22
      <br />
      <h3>II. Rechte der Nutzer und Betroffenen</h3>
      <p>
        Mit Blick auf die nachfolgend noch näher beschriebene Datenverarbeitung
        haben die Nutzer und Betroffenen das Recht
      </p>
      <ul>
        <li>
          auf Bestätigung, ob sie betreffende Daten verarbeitet werden, auf
          Auskunft über die verarbeiteten Daten, auf weitere Informationen über
          die Datenverarbeitung sowie auf Kopien der Daten (vgl. auch Art. 15
          DSGVO);
        </li>
        <li>
          auf Berichtigung oder Vervollständigung unrichtiger bzw.
          unvollständiger Daten (vgl. auch Art. 16 DSGVO);
        </li>
        <li>
          auf unverzügliche Löschung der sie betreffenden Daten (vgl. auch Art.
          17 DSGVO), oder, alternativ, soweit eine weitere Verarbeitung gemäß
          Art. 17 Abs. 3 DSGVO erforderlich ist, auf Einschränkung der
          Verarbeitung nach Maßgabe von Art. 18 DSGVO;
        </li>
        <li>
          auf Erhalt der sie betreffenden und von ihnen bereitgestellten Daten
          und auf Übermittlung dieser Daten an andere Anbieter/Verantwortliche
          (vgl. auch Art. 20 DSGVO);
        </li>
        <li>
          auf Beschwerde gegenüber der Aufsichtsbehörde, sofern sie der Ansicht
          sind, dass die sie betreffenden Daten durch den Anbieter unter Verstoß
          gegen datenschutzrechtliche Bestimmungen verarbeitet werden (vgl. auch
          Art. 77 DSGVO).
        </li>
      </ul>
      <p>
        Darüber hinaus ist der Anbieter dazu verpflichtet, alle Empfänger, denen
        gegenüber Daten durch den Anbieter offengelegt worden sind, über jedwede
        Berichtigung oder Löschung von Daten oder die Einschränkung der
        Verarbeitung, die aufgrund der Artikel 16, 17 Abs. 1, 18 DSGVO erfolgt,
        zu unterrichten. Diese Verpflichtung besteht jedoch nicht, soweit diese
        Mitteilung unmöglich oder mit einem unverhältnismäßigen Aufwand
        verbunden ist. Unbeschadet dessen hat der Nutzer ein Recht auf Auskunft
        über diese Empfänger.
      </p>
      <p>
        <strong>
          Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO das
          Recht auf Widerspruch gegen die künftige Verarbeitung der sie
          betreffenden Daten, sofern die Daten durch den Anbieter nach Maßgabe
          von Art. 6 Abs. 1 lit. f&lpar; DSGVO verarbeitet werden. Insbesondere
          ist ein Widerspruch gegen die Datenverarbeitung zum Zwecke der
          Direktwerbung statthaft.
        </strong>
      </p>
      <h3>III. Informationen zur Datenverarbeitung</h3>
      <p>
        Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten werden
        gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt, der
        Löschung der Daten keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen und nachfolgend keine anderslautenden Angaben zu
        einzelnen Verarbeitungsverfahren gemacht werden.
      </p>
      <h4 className="jet-listing-dynamic-field__content">Serverdaten</h4>
      <p>
        Aus technischen Gründen, insbesondere zur Gewährleistung eines sicheren
        und stabilen Internetauftritts, werden Daten durch Ihren
        Internet-Browser an uns bzw. an unseren Webspace-Provider übermittelt.
        Mit diesen sog. Server-Logfiles werden u.a. Typ und Version Ihres
        Internetbrowsers, das Betriebssystem, die Website, von der aus Sie auf
        unseren Internetauftritt gewechselt haben (Referrer URL), die Website(s)
        unseres Internetauftritts, die Sie besuchen, Datum und Uhrzeit des
        jeweiligen Zugriffs sowie die IP-Adresse des Internetanschlusses, von
        dem aus die Nutzung unseres Internetauftritts erfolgt, erhoben.
      </p>
      <p>
        Diese so erhobenen Daten werden vorrübergehend gespeichert, dies jedoch
        nicht gemeinsam mit anderen Daten von Ihnen.
      </p>
      <p>
        Diese Speicherung erfolgt auf der Rechtsgrundlage von Art. 6 Abs. 1 lit.
        f&lpar; DSGVO. Unser berechtigtes Interesse liegt in der Verbesserung,
        Stabilität, Funktionalität und Sicherheit unseres Internetauftritts.
      </p>
      <p>
        Die Daten werden spätestens nach sieben Tage wieder gelöscht, soweit
        keine weitere Aufbewahrung zu Beweiszwecken erforderlich ist.
        Andernfalls sind die Daten bis zur endgültigen Klärung eines Vorfalls
        ganz oder teilweise von der Löschung ausgenommen.
      </p>
      <h4 className="jet-listing-dynamic-field__content">
        Kontaktanfragen / Kontaktmöglichkeit
      </h4>
      <p>
        Sofern Sie per Kontaktformular oder E-Mail mit uns in Kontakt treten,
        werden die dabei von Ihnen angegebenen Daten zur Bearbeitung Ihrer
        Anfrage genutzt. Die Angabe der Daten ist zur Bearbeitung und
        Beantwortung Ihre Anfrage erforderlich – ohne deren Bereitstellung
        können wir Ihre Anfrage nicht oder allenfalls eingeschränkt beantworten.
      </p>
      <p>
        Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. b&lpar;
        DSGVO.
      </p>
      <p>
        Ihre Daten werden gelöscht, sofern Ihre Anfrage abschließend beantwortet
        worden ist und der Löschung keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen, wie bspw. bei einer sich etwaig anschließenden
        Vertragsabwicklung.
      </p>
      <h4 className="jet-listing-dynamic-field__content">OpenStreetMap</h4>
      <p>
        Für Anfahrtsbeschreibungen setzen wir OpenStreetMap, einen Dienst der
        OpenStreetMap Foundation, St John’s Innovation Centre, Cowley Road,
        Cambridge, CB 4 0 WS, United Kingdom, nachfolgend nur „OpenStreetMap“
        genannt, ein.
      </p>
      <p>
        Bei Aufruf einer unserer Internetseiten, in die der Dienst OpenStreetMap
        eingebunden ist, wird durch OpenStreetMap ein Cookie über Ihren
        Internet-Browser auf Ihrem Endgerät gespeichert. Hierdurch werden Ihre
        Nutzereinstellungen und Nutzerdaten zum Zwecke der Anzeige der Seite
        bzw. zur Gewährleistung der Funktionalität des Dienstes OpenStreetMap
        verarbeitet. Durch diese Verarbeitung kann OpenStreetMap erkennen, von
        welcher Internetseite Ihre Anfrage gesendet worden ist und an welche IP-
        Adresse die Darstellung der Anfahrt übermittelt werden soll.
      </p>
      <p>
        Im Falle einer von Ihnen erteilten Einwilligung für diese Verarbeitung
        ist Rechtsgrundlage Art. 6 Abs. 1 lit. a DSGVO. Rechtsgrundlage kann
        auch Art. 6 Abs. 1 lit. f DSGVO sein. Unser berechtigtes Interesse liegt
        in der Optimierung und dem wirtschaftlichen Betrieb unseres
        Internetauftritts.
      </p>
      <p>
        Sofern Sie mit dieser Verarbeitung nicht einverstanden sind, haben Sie
        die Möglichkeit, die Installation der Cookies durch die entsprechenden
        Einstellungen in Ihrem Internet-Browser zu verhindern. Einzelheiten
        hierzu finden Sie vorstehend unter dem Punkt „Cookies“.
      </p>
      <p>OpenStreetMap bietet unter</p>
      <p>
        <a
          href="https://wiki.osmfoundation.org/wiki/Privacy_Policy"
          target="_blank"
          rel="noreferrer nofollow"
        >
          https://wiki.osmfoundation.org/wiki/Privacy_Policy
        </a>
      </p>
      <p>
        weitere Informationen zur Erhebung und Nutzung der Daten sowie zu Ihren
        Rechten und Möglichkeiten zum Schutz Ihrer Privatsphäre an.
      </p>
      <p>
        <a
          href="https://www.generator-datenschutzerklärung.de"
          target="_blank"
          rel="noreferrer"
        >
          Muster-Datenschutzerklärung
        </a>{" "}
        der{" "}
        <a
          href="https://www.ratgeberrecht.eu/datenschutz/datenschutzerklaerung-generator-dsgvo.html"
          target="_blank"
          rel="noreferrer"
        >
          Anwaltskanzlei Weiß &amp; Partner
        </a>
      </p>
    </div>
  );
};

const StyledContainer = styled(Container)`
 @media (min-width: 768px) { 
    margin: auto;
    width: 70%;
  };
  @media (min-width: 1200px) { 
    margin: auto;
    width: 55%;
  }
`;

const Datenschutz = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="App-body">
        <StyledContainer>
          <h2>Datenschutzerklärung</h2>
          <DatenschutzText />
        </StyledContainer>
      </div>
    </div>
  );
};

export default Datenschutz;
