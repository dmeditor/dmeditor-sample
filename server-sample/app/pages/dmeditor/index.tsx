import * as React from 'react'
import { Component } from 'react'
import { Page } from '../../components/page'
import {DMEditor} from 'dmeditor';


export default class Index extends Component<{},{}> { 
  
render() {
    return (
      <Page>
        <DMEditor menu={
                    <span></span>
                } 
                mode='view'
                data={[{"type":"heading","content":{"layout":{"padding":0},"data":{"text":"Parats hovedstyre med økt satsing på tillitsvalgte og medlemmer","style":{"level":2}}}},{"type":"text","content":{"initialValue":[{"type":"paragraph","children":[{"text":" Neste års budsjett og tilhørende satsing på tillitsvalgte og medlemmer var blant sakene som ble behandlet da Hovedstyret var samlet mandag. ","bold":true}]}]}},{"type":"text","content":{"initialValue":[{"type":"paragraph","children":[{"text":"Medlemmene i Hovedstyret møttes for blant annet å diskutere budsjettet for kommende år. Dette legger viktige føringer for Parats virke fremover, og for 2023 er det satt av mer penger som direkte skal komme medlemmene til gode. I tillegg har Hovedstyret vedtatt neste års flaggsak. Det blir «tillitsvalgt»."}]}]}},{"type":"heading","content":{"layout":{"padding":0,"marginTop":43,"backgroundColor":""},"data":{"text":"Ønsker å markere de tillitsvalgte spesielt","style":{"level":4}}}},{"type":"text","content":{"initialValue":[{"type":"paragraph","children":[{"text":"– Mange vil kanskje si at «de tillitsvalgte» alltid har vært flaggsak i Parat i den forstand at de tillitsvalgte er Parats viktigste ressurs. Parat har alltid "},{"text":"satset","fontSize":14},{"text":" stort på skolering og støtte til de tillitsvalgte. Men hovedstyret mente at tiden nå var inne for å markere de tillitsvalgte helt spesielt, og langt utover det normale, sier leder i Parat Unn Kristin Olsen."}]},{"type":"paragraph","children":[{"text":""}]},{"type":"paragraph","children":[{"text":"Hun er opptatt av de tillitsvalgtes betydning for norsk arbeidsliv"}]},{"type":"paragraph","children":[{"text":"– De tillitsvalgte er en av de viktigste brikkene i den norske modellen, og vi hadde ikke hatt det arbeidslivet og velferdssamfunnet slik vi kjenner i dag uten tillitsvalgte, sier Olsen."}]},{"type":"paragraph","children":[{"text":""}]},{"type":"paragraph","children":[{"text":"Hun påpeker at alle er velkomne til å komme med forlag om hvordan de tillitsvalgte kan bli løftet frem."}]},{"type":"paragraph","children":[{"text":""}]},{"type":"paragraph","children":[{"text":"– At flaggsaken er vedtatt som tema, og med overordnede målsettinger, betyr ikke at alt er avgjort: Det er så absolutt tid og rom for alle i Parat å sende forslag og ideer til hva vi kan gjøre for å sette de tillitsvalgte i fokus, få flere til å bli tillitsvalgte, skolere tillitsvalgte og hylle de tillitsvalgte., sier Olsen."}]}]}},{"content":[["Name","Company","Address"],["Chen Xiongjie\n","Digimaker","Grensenveien 9"],["Christian Bull\n","Digimaker\n","Grensenveien 9\n"]],"settings":{"borderColor":"#d7d7d7","headerColor":"#ffbd07","oddColor":"","padding":7,"border":"border"},"type":"table"},{"type":"heading","content":{"layout":{"padding":0},"data":{"text":"This is a heading","style":{"level":1}}}},{"type":"text","content":{"initialValue":[{"type":"paragraph","children":[{"text":"This example shows how you can make a hoverifds","fontFamily":"Courier New"}]},{"type":"paragraph","children":[{"text":"fs"}]},{"type":"paragraph","children":[{"text":""}]}]}}]}
        />
      </Page>
    );
  }
} 