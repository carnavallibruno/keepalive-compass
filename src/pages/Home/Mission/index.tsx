import { MissionContainer, MissionRedSmall, MissionNormal, MissionRed } from './styles';

export default function Mission() {
  return (
    <MissionContainer>
      <MissionRedSmall>Our mission is</MissionRedSmall>
      <MissionNormal>Nossa missão é</MissionNormal>
      <MissionRed>to transform the world</MissionRed>
      <MissionNormal>transformar o mundo</MissionNormal>
      <MissionRed>building digital experiences</MissionRed>
      <MissionNormal>construindo experiências digitais</MissionNormal>
      <MissionRed>that enable our client's growth</MissionRed>
      <MissionNormal>que permitam o crescimento dos nossos clientes</MissionNormal>
    </MissionContainer>
  )

}