import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const data = [
  {
    question: 'Is all of this really free? Why?',
    answer: '',
  },
  { question: 'Skąd bieżecie pomysły?', answer: '' },
  { question: 'Jak mogę pomóc?', answer: '' },
  { question: 'How can I add my own idea here?', answer: '' },
  { question: 'Jak mogę się z wami skontaktować', answer: '' },
  { question: 'Can I use this as a commercial project?', answer: '' },
  { question: 'Czy mogę zmieniać te pomysły?', answer: '' },
  { question: 'Can I use this in my portfolio?', answer: '' },
  { question: 'Dlaczego te pomysły są darmowe?', answer: '' },
  { question: 'Dlaczego sami nie budujecie tych pomysłów?', answer: '' },
];

export function FAQ() {
  return (
    <div className="container">
      <Card>
        <CardHeader>
          <CardTitle>People are talking...</CardTitle>
          <CardDescription>
            In case you have any questions, here are the most frequently asked ones.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            {data.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
