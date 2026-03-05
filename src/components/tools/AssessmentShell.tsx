import { useState, useRef } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, ArrowLeft, Clock } from "lucide-react";

export interface AssessmentQuestion {
  id: string;
  category: string;
  question: string;
  description?: string;
  type: "radio" | "select" | "multi-select";
  options: { label: string; value: string }[];
  weight?: number;
}

interface AssessmentShellProps {
  title: string;
  estimatedTime: string;
  questions: AssessmentQuestion[];
  onComplete: (answers: Record<string, string | string[]>) => void;
}

export function AssessmentShell({ title, estimatedTime, questions, onComplete }: AssessmentShellProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const startTime = useRef(Date.now());

  const q = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const currentAnswer = answers[q.id];
  const canProceed = q.type === "multi-select"
    ? Array.isArray(currentAnswer) && currentAnswer.length > 0
    : !!currentAnswer;

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      onComplete(answers);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  };

  const setAnswer = (value: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [q.id]: value }));
  };

  const toggleMulti = (value: string) => {
    const current = (answers[q.id] as string[] | undefined) || [];
    if (current.includes(value)) {
      setAnswer(current.filter((v) => v !== value));
    } else {
      setAnswer([...current, value]);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
            Question {currentIndex + 1} of {questions.length}
          </p>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            {estimatedTime}
          </div>
        </div>
        <Progress value={progress} className="h-1.5" />
      </div>

      {/* Category badge */}
      <span className="inline-block text-accent text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">
        {q.category}
      </span>

      {/* Question */}
      <h3 className="!text-xl md:!text-2xl mb-3">{q.question}</h3>
      {q.description && (
        <p className="text-sm text-muted-foreground mb-8">{q.description}</p>
      )}

      {/* Answer Input */}
      <div className="space-y-3 mb-10">
        {q.type === "radio" && (
          <RadioGroup value={currentAnswer as string || ""} onValueChange={setAnswer} className="space-y-3">
            {q.options.map((opt) => (
              <label
                key={opt.value}
                className={`flex items-center gap-4 p-4 rounded-sm border cursor-pointer transition-all duration-200 ${
                  currentAnswer === opt.value
                    ? "border-accent bg-accent/5 shadow-sm"
                    : "border-border hover:border-accent/30 hover:bg-secondary/30"
                }`}
              >
                <RadioGroupItem value={opt.value} id={`${q.id}-${opt.value}`} />
                <Label htmlFor={`${q.id}-${opt.value}`} className="cursor-pointer flex-1 text-sm font-normal">
                  {opt.label}
                </Label>
              </label>
            ))}
          </RadioGroup>
        )}

        {q.type === "select" && (
          <Select value={currentAnswer as string || ""} onValueChange={setAnswer}>
            <SelectTrigger className="h-14 bg-secondary/30">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {q.options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        {q.type === "multi-select" && (
          <div className="space-y-3">
            {q.options.map((opt) => {
              const selected = Array.isArray(currentAnswer) && currentAnswer.includes(opt.value);
              return (
                <label
                  key={opt.value}
                  className={`flex items-center gap-4 p-4 rounded-sm border cursor-pointer transition-all duration-200 ${
                    selected
                      ? "border-accent bg-accent/5 shadow-sm"
                      : "border-border hover:border-accent/30 hover:bg-secondary/30"
                  }`}
                >
                  <Checkbox checked={selected} onCheckedChange={() => toggleMulti(opt.value)} />
                  <span className="text-sm">{opt.label}</span>
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={handlePrev} disabled={currentIndex === 0}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>
        <Button variant="cta" onClick={handleNext} disabled={!canProceed}>
          {currentIndex === questions.length - 1 ? "View Results" : "Next"}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
