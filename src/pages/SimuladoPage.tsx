import { useState, useMemo, useCallback } from "react";
import { bancoCompleto, type Questao, type ErroSessao } from "@/data/questoes";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { optionButtonClass, optionCorrectClass, optionWrongClass } from "@/components/AppButton";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight, RotateCcw, Trophy, XCircle, CheckCircle2 } from "lucide-react";

type SimuladoState = "idle" | "running" | "feedback" | "result";

export default function SimuladoPage() {
  const [state, setState] = useState<SimuladoState>("idle");
  const [questoes, setQuestoes] = useState<Questao[]>([]);
  const [index, setIndex] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState<ErroSessao[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [numQuestoes, setNumQuestoes] = useState(20);

  const hero = useScrollReveal();

  const questaoAtual = questoes[index];
  const isCorrect = selected ? selected.slice(0, 2) === questaoAtual?.correta.slice(0, 2) : false;

  const iniciar = useCallback(() => {
    const shuffled = [...bancoCompleto].sort(() => Math.random() - 0.5);
    const validas = shuffled.filter(q => q.opcoes.length >= 2).slice(0, numQuestoes);
    setQuestoes(validas);
    setIndex(0);
    setAcertos(0);
    setErros([]);
    setSelected(null);
    setShowFeedback(false);
    setState("running");
  }, [numQuestoes]);

  const handleSelect = (opcao: string) => {
    if (showFeedback) return;
    setSelected(opcao);
    setShowFeedback(true);

    const correct = opcao.slice(0, 2) === questaoAtual.correta.slice(0, 2);
    if (correct) {
      setAcertos(a => a + 1);
    } else {
      setErros(e => [...e, { questao: questaoAtual.pergunta, correta: questaoAtual.correta, justificativa: opcao }]);
    }
  };

  const proxima = () => {
    if (index + 1 >= questoes.length) {
      setState("result");
    } else {
      setIndex(i => i + 1);
      setSelected(null);
      setShowFeedback(false);
    }
  };

  if (state === "idle") {
    return (
      <div className="p-6 md:p-10 max-w-3xl mx-auto">
        <div ref={hero.ref} style={hero.style}>
          <h1 className="text-3xl font-bold mb-2">Simulado <span className="text-gradient-gold">Real</span></h1>
          <p className="text-muted-foreground text-sm mb-8">Treine com questões reais do banco estratégico OAB.</p>

          <Card className="mb-6">
            <CardContent className="p-6 space-y-4">
              <p className="text-sm font-medium text-foreground">Quantidade de questões</p>
              <div className="flex gap-2">
                {[10, 20, 40, 80].map(n => (
                  <button
                    key={n}
                    onClick={() => setNumQuestoes(n)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 active:scale-[0.96] ${
                      numQuestoes === n
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Button onClick={iniciar} size="lg" className="w-full active:scale-[0.97]">
            <Crosshair className="h-4 w-4 mr-2" /> Iniciar Simulado
          </Button>
        </div>
      </div>
    );
  }

  if (state === "result") {
    const percent = Math.round((acertos / questoes.length) * 100);
    const passed = percent >= 60;

    return (
      <div className="p-6 md:p-10 max-w-3xl mx-auto">
        <div className="animate-reveal-up text-center space-y-6">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${passed ? "bg-success/15" : "bg-destructive/15"}`}>
            {passed ? <Trophy className="h-10 w-10 text-success" /> : <XCircle className="h-10 w-10 text-destructive" />}
          </div>

          <h1 className="text-3xl font-bold">Fim do Simulado</h1>
          
          <div className="flex justify-center gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary tabular-nums">{acertos}</p>
              <p className="text-xs text-muted-foreground">Acertos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-destructive tabular-nums">{erros.length}</p>
              <p className="text-xs text-muted-foreground">Erros</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-foreground tabular-nums">{percent}%</p>
              <p className="text-xs text-muted-foreground">Aproveitamento</p>
            </div>
          </div>

          <Progress value={percent} className="h-3 max-w-sm mx-auto" />

          <p className={`text-sm font-medium ${passed ? "text-success" : "text-destructive"}`}>
            {passed ? "Aprovado! Continue assim." : "Não atingiu a nota de corte (60%). Revise os erros."}
          </p>

          {erros.length > 0 && (
            <Card className="text-left mt-6">
              <CardContent className="p-5 space-y-4">
                <p className="text-sm font-semibold text-destructive">Questões Erradas</p>
                {erros.map((e, i) => (
                  <div key={i} className="text-xs text-muted-foreground border-b border-border pb-3 last:border-0">
                    <p className="text-foreground text-sm mb-1">{e.questao.slice(0, 150)}...</p>
                    <p className="text-success">Correta: {e.correta}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          <Button onClick={() => setState("idle")} variant="outline" className="active:scale-[0.97]">
            <RotateCcw className="h-4 w-4 mr-2" /> Novo Simulado
          </Button>
        </div>
      </div>
    );
  }

  // Running state
  return (
    <div className="p-6 md:p-10 max-w-3xl mx-auto">
      {/* Progress header */}
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs text-muted-foreground font-mono">
          Questão {index + 1}/{questoes.length}
        </p>
        <p className="text-xs text-muted-foreground tabular-nums">
          {acertos} acertos · {erros.length} erros
        </p>
      </div>
      <Progress value={((index + 1) / questoes.length) * 100} className="h-1.5 mb-6" />

      {/* Question */}
      <Card className="mb-6">
        <CardContent className="p-5">
          <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-primary mb-3 bg-primary/10 px-2 py-0.5 rounded">
            {questaoAtual.tema}
          </span>
          <p className="text-sm leading-relaxed text-foreground">{questaoAtual.pergunta}</p>
        </CardContent>
      </Card>

      {/* Options */}
      <div className="space-y-2 mb-6">
        {questaoAtual.opcoes.map((op) => {
          let cls = optionButtonClass;
          if (showFeedback) {
            const isThis = op === selected;
            const isCorrectOp = op.slice(0, 2) === questaoAtual.correta.slice(0, 2);
            if (isCorrectOp) cls = optionCorrectClass;
            else if (isThis && !isCorrectOp) cls = optionWrongClass;
          }

          return (
            <button
              key={op}
              onClick={() => handleSelect(op)}
              disabled={showFeedback}
              className={cls + " disabled:cursor-default flex items-start gap-3"}
            >
              {showFeedback && op.slice(0, 2) === questaoAtual.correta.slice(0, 2) && (
                <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
              )}
              {showFeedback && op === selected && !isCorrect && op.slice(0, 2) !== questaoAtual.correta.slice(0, 2) && (
                <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
              )}
              <span>{op}</span>
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {showFeedback && (
        <div className="animate-reveal-up space-y-4">
          <Card className={isCorrect ? "border-success/30 bg-success/5" : "border-destructive/30 bg-destructive/5"}>
            <CardContent className="p-5">
              <p className={`text-sm font-semibold mb-2 ${isCorrect ? "text-success" : "text-destructive"}`}>
                {isCorrect ? "✓ Resposta Correta!" : "✗ Resposta Incorreta"}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {questaoAtual.comentario}
              </p>
            </CardContent>
          </Card>
          <Button onClick={proxima} className="w-full active:scale-[0.97]">
            {index + 1 >= questoes.length ? "Ver Resultado" : "Próxima Questão"} <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
}
