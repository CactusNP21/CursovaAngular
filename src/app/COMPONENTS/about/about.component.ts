import { Component } from '@angular/core';
import {NgStyle, TitleCasePipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    UpperCasePipe,
    NgStyle,
    TitleCasePipe
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  points = [
    "забезпечує правильне застосування в університеті нормативно-правових актів та інших документів, подає ректорові пропозиції щодо вирішення правових питань, пов'язаних з діяльністю університету;",
    "розробляє та бере участь у розробленні проектів актів та інших документів з питань юридичної діяльності університету;",
    "проводить юридичну експертизу проектів актів та інших документів, підготовлених структурними підрозділами університету, погоджує (візує) їх за наявності віз керівників заінтересованих структурних підрозділів або осіб, що їх заміщують. У разі виявлення невідповідності проекту акта чи іншого документа вимогам законодавства подає заінтересованому структурному підрозділу вмотивовані пропозиції щодо приведення його у відповідність із чинним законодавством;",
    "проводить разом із структурними підрозділами університету роботу з перегляду згідно з її компетенцією актів та інших документів з метою приведення їх у відповідність із законодавством;",
    "інформує ректора університету про необхідність вжиття заходів для внесення змін до актів та інших документів, визнання їх такими, що втратили чинність, або скасування;",
    "організовує роботу, пов'язану з укладенням договорів (контрактів), бере участь у їх підготовці та здійсненні контролю за виконанням, дає правову оцінку проектам таких договорів (контрактів). Проекти договорів (контрактів) погоджуються (візуються) юридичною службою за наявності віз керівників заінтересованих структурних підрозділів або осіб, що їх заміщують;",
    "бере участь у забезпеченні захисту майнових прав і законних інтересів університету в разі невиконання чи неналежного виконання договірних зобов'язань;",
    "організовує претензійну та позовну роботу, проводить аналіз її результатів;",
    "здійснює контроль за дотриманням структурними підрозділами встановленого в університеті порядку пред'явлення і розгляду документів (претензій);",
    "сприяє своєчасному вжиттю заходів до усунення порушень, зазначених у документах прокурорського реагування, судових рішеннях, відповідних документах правоохоронних і контролюючих органів;",
    "подає ректору університету:\n - пропозиції щодо удосконалення правового забезпечення діяльності університету;\n - висновки стосовно правомірності списання матеріальних цінностей, дебіторської заборгованості, непродуктивних витрат та правову оцінку фактам нестач, крадіжок, безгосподарності, випуску недоброякісної продукції, псування майна;",
    "розглядає матеріали про відшкодування матеріальної шкоди за рахунок винних осіб, що готуються відповідними структурними підрозділами на основі економіко-правового аналізу даних бухгалтерського обліку і статистичної звітності, інших документів фінансово-господарської діяльності університету та матеріалів перевірок, проведених правоохоронними і контролюючими органами;",
    "сприяє дотриманню законності у реалізації прав трудового колективу університету під час вирішення виробничих та соціальних питань;",
    "разом із заінтересованими структурними підрозділами університету бере участь у підготовці заходів щодо зміцнення трудової дисципліни, забезпечення охорони праці на виробництві;",
    "надає правову допомогу працівникам університету, які потребують соціального захисту;",
    "забезпечує правильне застосування норм трудового, житлового, пенсійного та іншого законодавства, що стосуються прав і законних інтересів працівників університету, подає пропозиції ректору університету щодо поновлення порушених прав;",
    "веде облік актів законодавства і міжнародних договорів України, забезпечує підтримання їх у контрольному стані та зберігання;",
    "збирає інформацію про офіційне оприлюднення актів законодавства в друкованих виданнях, стосовно діяльності університету;",
    "організовує і проводить роботу, спрямовану на підвищення рівня правових знань працівників університету, роз'яснює практику застосування законодавства, надає консультації з правових питань;",
    "надає правову допомогу в процесі створення, освоєння та впровадження науково-технічних розроблень, новітніх технологій, а також у здійсненні заходів щодо поліпшення якості продукції, робіт, послуг."
  ];
}
