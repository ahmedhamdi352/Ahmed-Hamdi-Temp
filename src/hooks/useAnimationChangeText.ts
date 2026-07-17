"use client";
import { useEffect } from "react";
import $ from "jquery";

export default function useAnimationChangeText() {
    useEffect(() => {
        const animationDelay = 2500,
            barAnimationDelay = 3800,
            barWaiting = barAnimationDelay - 3000,
            lettersDelay = 50,
            typeLettersDelay = 150,
            selectionDuration = 500,
            typeAnimationDelay = selectionDuration + 800,
            revealDuration = 600,
            revealAnimationDelay = 1500;

        initHeadline();

        function initHeadline() {
            singleLetters($(".animationtext.letters").find(".item-text"));
            animateHeadline($(".animationtext"));
        }

        function singleLetters($words: JQuery<HTMLElement>) {
            $words.each(function () {
                const word = $(this);
                const letters = word.text().split("");
                const selected = word.hasClass("is-visible");

                const newLetters = letters.map((letter) => (selected ? `<i class="in">${letter}</i>` : `<i>${letter}</i>`)).join("");

                word.html(newLetters).css("opacity", 1);
            });
        }

        function animateHeadline($headlines: JQuery<HTMLElement>) {
            $headlines.each(function () {
                const headline = $(this);

                if (headline.hasClass("loading-bar")) {
                    setTimeout(() => {
                        headline.find(".cd-words-wrapper").addClass("is-loading");
                    }, barWaiting);
                } else if (headline.hasClass("clip")) {
                    const spanWrapper = headline.find(".cd-words-wrapper");
                    const newWidth = spanWrapper.width()! + 10;
                    spanWrapper.css("width", newWidth);
                } else if (!headline.hasClass("type")) {
                    const words = headline.find(".cd-words-wrapper .item-text");
                    let width = 0;
                    words.each(function () {
                        const wordWidth = $(this).width()!;
                        if (wordWidth > width) width = wordWidth;
                    });
                    headline.find(".cd-words-wrapper").css("width", width);
                }

                setTimeout(() => {
                    hideWord(headline.find(".is-visible").eq(0));
                }, animationDelay);
            });
        }

        function hideWord($word: JQuery<HTMLElement>) {
            const nextWord = takeNext($word);

            if ($word.parents(".animationtext").hasClass("type")) {
                const parentSpan = $word.parent(".cd-words-wrapper");
                parentSpan.addClass("selected").removeClass("waiting");
                setTimeout(() => {
                    parentSpan.removeClass("selected");
                    $word.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out");
                }, selectionDuration);
                setTimeout(() => showWord(nextWord, typeLettersDelay), typeAnimationDelay);
            } else if ($word.parents(".animationtext").hasClass("letters")) {
                const bool = $word.children("i").length >= nextWord.children("i").length;
                hideLetter($word.find("i").eq(0), $word, bool, lettersDelay);
                showLetter(nextWord.find("i").eq(0), nextWord, bool, lettersDelay);
            } else if ($word.parents(".animationtext").hasClass("clip")) {
                $word.parents(".cd-words-wrapper").animate({ width: "2px" }, revealDuration, () => {
                    switchWord($word, nextWord);
                    showWord(nextWord);
                });
            } else if ($word.parents(".animationtext").hasClass("loading-bar")) {
                $word.parents(".cd-words-wrapper").removeClass("is-loading");
                switchWord($word, nextWord);
                setTimeout(() => hideWord(nextWord), barAnimationDelay);
                setTimeout(() => $word.parents(".cd-words-wrapper").addClass("is-loading"), barWaiting);
            } else {
                switchWord($word, nextWord);
                setTimeout(() => hideWord(nextWord), animationDelay);
            }
        }

        function showWord($word: JQuery<HTMLElement>, $duration?: number) {
            if ($word.parents(".animationtext").hasClass("type")) {
                showLetter($word.find("i").eq(0), $word, false, $duration!);
                $word.addClass("is-visible").removeClass("is-hidden");
            } else if ($word.parents(".animationtext").hasClass("clip")) {
                $word
                    .parents(".cd-words-wrapper")
                    .animate({ width: $word.width()! + 10 }, revealDuration, () => setTimeout(() => hideWord($word), revealAnimationDelay));
            }
        }

        function hideLetter($letter: JQuery<HTMLElement>, $word: JQuery<HTMLElement>, $bool: boolean, $duration: number) {
            $letter.removeClass("in").addClass("out");

            if (!$letter.is(":last-child")) {
                setTimeout(() => hideLetter($letter.next(), $word, $bool, $duration), $duration);
            } else if ($bool) {
                setTimeout(() => hideWord(takeNext($word)), animationDelay);
            }

            if ($letter.is(":last-child") && $("html").hasClass("no-csstransitions")) {
                const nextWord = takeNext($word);
                switchWord($word, nextWord);
            }
        }

        function showLetter($letter: JQuery<HTMLElement>, $word: JQuery<HTMLElement>, $bool: boolean, $duration: number) {
            $letter.addClass("in").removeClass("out");

            if (!$letter.is(":last-child")) {
                setTimeout(() => showLetter($letter.next(), $word, $bool, $duration), $duration);
            } else {
                if ($word.parents(".animationtext").hasClass("type")) {
                    setTimeout(() => $word.parents(".cd-words-wrapper").addClass("waiting"), 200);
                }
                if (!$bool) {
                    setTimeout(() => hideWord($word), animationDelay);
                }
            }
        }

        function takeNext($word: JQuery<HTMLElement>) {
            return !$word.is(":last-child") ? $word.next() : $word.parent().children().eq(0);
        }

        function switchWord($oldWord: JQuery<HTMLElement>, $newWord: JQuery<HTMLElement>) {
            $oldWord.removeClass("is-visible").addClass("is-hidden");
            $newWord.removeClass("is-hidden").addClass("is-visible");
        }
    }, []);
}
