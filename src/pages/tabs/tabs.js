/**
 * Created by zhuzihao on 2017/2/25.
 */
import { Component } from '@angular/core';
import { HomePage } from "../home/home";
import { MeetPage } from "../meet/meet";
import { NewsPage } from "../news/news";
import { SettingPage } from "../settings/setting";
export var TabsPage = (function () {
    function TabsPage() {
        this.tab0 = HomePage;
        this.tab1 = MeetPage;
        this.tab2 = NewsPage;
        this.tab3 = SettingPage;
    }
    TabsPage.decorators = [
        { type: Component, args: [{
                    template: "\n<ion-tabs>\n  <ion-tab [root]=\"tab0\" tabIcon=\"home\" tabTitle=\"\u9996\u9875\"></ion-tab>\n  <ion-tab [root]=\"tab1\" tabIcon=\"clipboard\" tabTitle=\"\u4F1A\u8BAE\"></ion-tab>\n  <ion-tab [root]=\"tab2\" tabIcon=\"ios-globe-outline\" tabTitle=\"\u65B0\u95FB\"></ion-tab>\n  <ion-tab [root]=\"tab3\" tabIcon=\"ios-cog-outline\" tabTitle=\"\u8BBE\u7F6E\"></ion-tab>\n</ion-tabs>\n"
                },] },
    ];
    /** @nocollapse */
    TabsPage.ctorParameters = [];
    return TabsPage;
}());
//# sourceMappingURL=tabs.js.map