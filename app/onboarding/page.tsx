"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { dreamCards } from "@/data/dream-cards";
import { lifeStages } from "@/data/life-stages";
import type { GoalType, LifeStage } from "@/domain/types";
import { format } from "@/i18n/format";
import { strings } from "@/i18n/strings";
import { useOnboarding } from "@/state/onboarding-session";
import { OnboardingStepShell } from "@/components/OnboardingStepShell";
import styles from "./page.module.css";

const TOTAL_STEPS = 5;

export default function OnboardingPage() {
  const router = useRouter();
  const onboarding = useOnboarding();
  const { hydrated, completed, step, answers, isResuming } = onboarding;

  const [dogNameInput, setDogNameInput] = useState("");
  const [personNameInput, setPersonNameInput] = useState("");
  const [familyMembersInput, setFamilyMembersInput] = useState("");
  const [selectedGoalType, setSelectedGoalType] = useState<GoalType | null>(null);
  const [goalNoteInput, setGoalNoteInput] = useState("");

  useEffect(() => {
    if (hydrated && completed) {
      router.replace("/");
    }
  }, [hydrated, completed, router]);

  if (!hydrated || completed) {
    return null;
  }

  const dogName = answers.dogName ?? "your dog";

  function advance() {
    onboarding.dismissWelcomeBack();
  }

  function handleDogNameSubmit() {
    const trimmed = dogNameInput.trim();
    if (!trimmed) return;
    advance();
    onboarding.setDogName(trimmed);
  }

  function handleLifeStageSelect(stage: LifeStage) {
    advance();
    onboarding.setLifeStage(stage);
  }

  function handleLifeStageSkip() {
    advance();
    onboarding.setLifeStage(null);
  }

  function handlePersonNameSubmit() {
    const trimmed = personNameInput.trim();
    if (!trimmed) return;
    advance();
    onboarding.setPersonName(trimmed);
  }

  function handleFamilyMembersSubmit(names: string[]) {
    advance();
    onboarding.setOtherFamilyMembers(names);
  }

  function handleGoalSubmit() {
    if (!selectedGoalType) return;
    const note = goalNoteInput.trim() || null;
    advance();
    onboarding.completeGoalStep(selectedGoalType, note);
    router.push("/");
  }

  return (
    <main className={styles.main}>
      {isResuming && <p className={styles.welcomeBack}>{strings.onboarding.welcomeBack}</p>}

      {step === 1 && (
        <OnboardingStepShell
          step={1}
          totalSteps={TOTAL_STEPS}
          question={strings.onboarding.dogName.question}
          context={strings.onboarding.dogName.context}
          onBack={() => router.push("/welcome")}
        >
          <input
            type="text"
            className={styles.textInput}
            placeholder={strings.onboarding.dogName.placeholder}
            value={dogNameInput}
            onChange={(event) => setDogNameInput(event.target.value)}
            autoFocus
          />
          <button
            type="button"
            className={styles.primaryButton}
            disabled={!dogNameInput.trim()}
            onClick={handleDogNameSubmit}
          >
            {strings.onboarding.dogName.continueButton}
          </button>
        </OnboardingStepShell>
      )}

      {step === 2 && (
        <OnboardingStepShell
          step={2}
          totalSteps={TOTAL_STEPS}
          question={format(strings.onboarding.lifeStage.question, { dogName })}
          context={format(strings.onboarding.lifeStage.context, { dogName })}
          onBack={onboarding.goBack}
          onSkip={handleLifeStageSkip}
        >
          {lifeStages.map((stage) => (
            <button
              key={stage}
              type="button"
              className={styles.optionButton}
              onClick={() => handleLifeStageSelect(stage)}
            >
              {stage}
            </button>
          ))}
        </OnboardingStepShell>
      )}

      {step === 3 && (
        <OnboardingStepShell
          step={3}
          totalSteps={TOTAL_STEPS}
          question={strings.onboarding.personName.question}
          context={strings.onboarding.personName.context}
          onBack={onboarding.goBack}
        >
          <input
            type="text"
            className={styles.textInput}
            placeholder={strings.onboarding.personName.placeholder}
            value={personNameInput}
            onChange={(event) => setPersonNameInput(event.target.value)}
            autoFocus
          />
          <button
            type="button"
            className={styles.primaryButton}
            disabled={!personNameInput.trim()}
            onClick={handlePersonNameSubmit}
          >
            {strings.onboarding.personName.continueButton}
          </button>
        </OnboardingStepShell>
      )}

      {step === 4 && (
        <OnboardingStepShell
          step={4}
          totalSteps={TOTAL_STEPS}
          question={format(strings.onboarding.familyMembers.question, { dogName })}
          context={format(strings.onboarding.familyMembers.context, { dogName })}
          onBack={onboarding.goBack}
          onSkip={() => handleFamilyMembersSubmit([])}
        >
          <input
            type="text"
            className={styles.textInput}
            placeholder={strings.onboarding.familyMembers.placeholder}
            value={familyMembersInput}
            onChange={(event) => setFamilyMembersInput(event.target.value)}
            autoFocus
          />
          <button
            type="button"
            className={styles.primaryButton}
            disabled={!familyMembersInput.trim()}
            onClick={() =>
              handleFamilyMembersSubmit(
                familyMembersInput
                  .split(",")
                  .map((name) => name.trim())
                  .filter(Boolean)
              )
            }
          >
            {strings.onboarding.familyMembers.continueButton}
          </button>
        </OnboardingStepShell>
      )}

      {step === 5 && (
        <OnboardingStepShell
          step={5}
          totalSteps={TOTAL_STEPS}
          question={format(strings.onboarding.goal.question, { dogName })}
          context={format(strings.onboarding.goal.context, { dogName })}
          onBack={onboarding.goBack}
        >
          {dreamCards.map((card) => (
            <button
              key={card.id}
              type="button"
              className={
                selectedGoalType === card.goalType
                  ? `${styles.optionButton} ${styles.optionButtonSelected}`
                  : styles.optionButton
              }
              onClick={() => setSelectedGoalType(card.goalType)}
            >
              {card.label}
            </button>
          ))}
          <textarea
            className={styles.textArea}
            placeholder={strings.onboarding.goal.notePlaceholder}
            value={goalNoteInput}
            onChange={(event) => setGoalNoteInput(event.target.value)}
          />
          <button
            type="button"
            className={styles.primaryButton}
            disabled={!selectedGoalType}
            onClick={handleGoalSubmit}
          >
            {strings.onboarding.goal.continueButton}
          </button>
        </OnboardingStepShell>
      )}
    </main>
  );
}
