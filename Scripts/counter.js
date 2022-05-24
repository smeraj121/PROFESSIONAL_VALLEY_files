/*! elementor - v3.6.2 - 04-04-2022 */
"use strict";
(self.webpackChunkelementor = self.webpackChunkelementor || []).push([[120], {
    7884: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class Counter extends elementorModules.frontend.handlers.Base {
            getDefaultSettings() {
                return {
                    selectors: {
                        counterNumber: ".elementor-counter-number"
                    }
                }
            }
            getDefaultElements() {
                const e = this.getSettings("selectors");
                return {
                    $counterNumber: this.$element.find(e.counterNumber)
                }
            }
            onInit() {
                super.onInit(),
                this.intersectionObserver = elementorModules.utils.Scroll.scrollObserver({
                    callback: e=>{
                        if (e.isInViewport) {
                            this.intersectionObserver.unobserve(this.elements.$counterNumber[0]);
                            const e = this.elements.$counterNumber.data()
                              , t = e.toValue.toString().match(/\.(.*)/);
                            t && (e.rounding = t[1].length)
                            this.elements.$counterNumber.numerator(e)
                        }
                    }
                }),
                this.intersectionObserver.observe(this.elements.$counterNumber[0])
            }
        }
        t.default = Counter
    }
}]);
