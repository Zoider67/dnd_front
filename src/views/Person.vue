<template>
    <b-container class="bv-example-row">
        <b-row no-gutters>
            <b-col>
                  <b-card class="text-center mt-4">
                    <b-card-text>
                        Элладан
                    </b-card-text>
                </b-card> </b-col>
            <b-col>
                <b-card>
                    <b-card-text>
                        <b-row>
                            <b-col>
                                Волшебник, 3
                            </b-col>
                            <b-col>
                                Профессор
                            </b-col>
                            <b-col>
                                Zoider
                            </b-col>
                        </b-row>
                        <b-row id="headerdown">
                            <b-col>
                                Класс и уровень
                            </b-col>
                            <b-col>
                                Предыстория
                            </b-col>
                            <b-col>
                                Имя игрока
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                Полуэльф
                            </b-col>
                            <b-col>
                                Законно-доброе
                            </b-col>
                            <b-col>
                                30
                            </b-col>
                        </b-row>
                         <b-row id="headerdown">
                            <b-col>
                                Раса
                            </b-col>
                            <b-col>
                                Мировоззрение
                            </b-col>
                            <b-col>
                                Опыт
                            </b-col>
                        </b-row>
                    </b-card-text>
                </b-card> 
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="4">
                <b-row>
                    <b-col cols="4">
                        <b-card id="char-card" header="Сила" class="text-center mb-3" footer="+1">
                            <b-card-text> 13</b-card-text>
                        </b-card>
                        <b-card  id="char-card" header="Ловкость" class="text-center mb-3"  footer="+1">
                            <b-card-text> 14</b-card-text>
                        </b-card>
                        <b-card id="char-card" header="Телосложение" class="text-center mb-3"  footer="+1">
                            <b-card-text> 15</b-card-text>
                        </b-card>
                        <b-card id="char-card" header="Интеллект" class="text-center mb-3"  footer="+1">
                            <b-card-text> 10</b-card-text>
                        </b-card>
                        <b-card  id="char-card" header="Мудрость" class="text-center mb-3" footer="+1">
                            <b-card-text> 8</b-card-text>
                        </b-card>
                        <b-card  id="char-card" header="Харизма" class="text-center mb-3" footer="+1">
                            <b-card-text> 15</b-card-text>
                        </b-card>
                    </b-col>
                    <b-col>
                        <b-card id="vd-card" class="text-center">
                            <b-row no-gutters>
                                <b-col cols="2" style="border-width:1px; border-style:solid; border-color:lightgray">
                                </b-col>
                                <b-col cols="10" style="border-width:1px; border-style:solid; border-color:lightgray">
                                    Вдохновение
                                </b-col>
                            </b-row>
                        </b-card>
                        <b-card id="mastery-card" class="text-center mt-1">
                            <b-row no-gutters>
                                <b-col cols="2" style="border-width:1px; border-style:solid; border-color:lightgray;">
                                    +2
                                </b-col>
                                <b-col cols="10" style="border-width:1px; border-style:solid; border-color:lightgray">
                                    Бонус мастерства
                                </b-col>
                            </b-row>
                        </b-card>
                        <b-card id="saving-throws" class="text-center mt-3" footer="Спасброски">
                            <b-row>
                                 <b-col cols="2"><i class="material-icons" style="font-size:16px;"> radio_button_unchecked </i></b-col>
                                 <b-col cols="1" class="bottom-field"></b-col>
                                 <b-col cols="8" style="text-align:left;">Силы</b-col>
                            </b-row>
                            <b-row>
                                 <b-col cols="2"><i class="material-icons" style="font-size:16px;"> radio_button_unchecked </i></b-col>
                                 <b-col cols="1" class="bottom-field"></b-col>
                                 <b-col cols="8" style="text-align:left;">Ловкости</b-col>
                            </b-row>
                            <b-row>
                                 <b-col cols="2"><i class="material-icons" style="font-size:16px;"> radio_button_unchecked </i></b-col>
                                 <b-col cols="1" class="bottom-field"></b-col>
                                 <b-col cols="8" style="text-align:left;">Телосложения</b-col>
                            </b-row>
                            <b-row>
                                 <b-col cols="2"><i class="material-icons" style="font-size:16px;"> radio_button_unchecked </i></b-col>
                                 <b-col cols="1" class="bottom-field"></b-col>
                                 <b-col cols="8" style="text-align:left;">Интеллекта</b-col>
                            </b-row>
                            <b-row>
                                 <b-col cols="2"><i class="material-icons" style="font-size:16px;"> radio_button_unchecked </i></b-col>
                                 <b-col cols="1" class="bottom-field"></b-col>
                                 <b-col cols="8" style="text-align:left;">Мудрости</b-col>
                            </b-row>
                            <b-row>
                                 <b-col cols="2"><i class="material-icons" style="font-size:16px;"> radio_button_unchecked </i></b-col>
                                 <b-col cols="1" class="bottom-field"></b-col>
                                 <b-col cols="8" style="text-align:left;">Харизмы</b-col>
                            </b-row>
                        </b-card>
                        <b-card id="ability" class="text-center mt-3" footer="Навыки" style="border: 0">
                            <b-row>
                                 <b-col cols="2"><i class="material-icons" style="font-size:16px;"> radio_button_unchecked </i></b-col>
                                 <b-col cols="1" class="bottom-field"></b-col>
                                 <b-col cols="8" style="text-align:left;">Силы</b-col>
                            </b-row>
                            <b-row>
                                 <b-col cols="2"><i class="material-icons" style="font-size:16px;"> radio_button_unchecked </i></b-col>
                                 <b-col cols="1" class="bottom-field"></b-col>
                                 <b-col cols="8" style="text-align:left;">Ловкости</b-col>
                            </b-row>
                            <b-row>
                                 <b-col cols="2"><i class="material-icons" style="font-size:16px;"> radio_button_unchecked </i></b-col>
                                 <b-col cols="1" class="bottom-field"></b-col>
                                 <b-col cols="8" style="text-align:left;">Телосложения</b-col>
                            </b-row>
                            <b-row>
                                 <b-col cols="2"><i class="material-icons" style="font-size:16px;"> radio_button_unchecked </i></b-col>
                                 <b-col cols="1" class="bottom-field"></b-col>
                                 <b-col cols="8" style="text-align:left;">Интеллекта</b-col>
                            </b-row>
                            <b-row>
                                 <b-col cols="2"><i class="material-icons" style="font-size:16px;"> radio_button_unchecked </i></b-col>
                                 <b-col cols="1" class="bottom-field"></b-col>
                                 <b-col cols="8" style="text-align:left;">Мудрости</b-col>
                            </b-row>
                            <b-row>
                                 <b-col cols="2"><i class="material-icons" style="font-size:16px;"> radio_button_unchecked </i></b-col>
                                 <b-col cols="1" class="bottom-field"></b-col>
                                 <b-col cols="8" style="text-align:left;">Харизмы</b-col>
                            </b-row>
                            <b-row>
                                 <b-col cols="2"><i class="material-icons" style="font-size:16px;"> radio_button_unchecked </i></b-col>
                                 <b-col cols="1" class="bottom-field"></b-col>
                                 <b-col cols="8" style="text-align:left;">Силы</b-col>
                            </b-row>
                            <b-row>
                                 <b-col cols="2"><i class="material-icons" style="font-size:16px;"> radio_button_unchecked </i></b-col>
                                 <b-col cols="1" class="bottom-field"></b-col>
                                 <b-col cols="8" style="text-align:left;">Ловкости</b-col>
                            </b-row>
                            <b-row>
                                 <b-col cols="2"><i class="material-icons" style="font-size:16px;"> radio_button_unchecked </i></b-col>
                                 <b-col cols="1" class="bottom-field"></b-col>
                                 <b-col cols="8" style="text-align:left;">Телосложения</b-col>
                            </b-row>
                            <b-row>
                                 <b-col cols="2"><i class="material-icons" style="font-size:16px;"> radio_button_unchecked </i></b-col>
                                 <b-col cols="1" class="bottom-field"></b-col>
                                 <b-col cols="8" style="text-align:left;">Интеллекта</b-col>
                            </b-row>
                            <b-row>
                                 <b-col cols="2"><i class="material-icons" style="font-size:16px;"> radio_button_unchecked </i></b-col>
                                 <b-col cols="1" class="bottom-field"></b-col>
                                 <b-col cols="8" style="text-align:left;">Мудрости</b-col>
                            </b-row>
                            <b-row>
                                 <b-col cols="2"><i class="material-icons" style="font-size:16px;"> radio_button_unchecked </i></b-col>
                                 <b-col cols="1" class="bottom-field"></b-col>
                                 <b-col cols="8" style="text-align:left;">Харизмы</b-col>
                            </b-row>
                            <b-row>
                                 <b-col cols="2"><i class="material-icons" style="font-size:16px;"> radio_button_unchecked </i></b-col>
                                 <b-col cols="1" class="bottom-field"></b-col>
                                 <b-col cols="8" style="text-align:left;">Силы</b-col>
                            </b-row>
                            <b-row>
                                 <b-col cols="2"><i class="material-icons" style="font-size:16px;"> radio_button_unchecked </i></b-col>
                                 <b-col cols="1" class="bottom-field"></b-col>
                                 <b-col cols="8" style="text-align:left;">Ловкости</b-col>
                            </b-row>
                            <b-row>
                                 <b-col cols="2"><i class="material-icons" style="font-size:16px;"> radio_button_unchecked </i></b-col>
                                 <b-col cols="1" class="bottom-field"></b-col>
                                 <b-col cols="8" style="text-align:left;">Телосложения</b-col>
                            </b-row>
                            <b-row>
                                 <b-col cols="2"><i class="material-icons" style="font-size:16px;"> radio_button_unchecked </i></b-col>
                                 <b-col cols="1" class="bottom-field"></b-col>
                                 <b-col cols="8" style="text-align:left;">Интеллекта</b-col>
                            </b-row>
                            <b-row>
                                 <b-col cols="2"><i class="material-icons" style="font-size:16px;"> radio_button_unchecked </i></b-col>
                                 <b-col cols="1" class="bottom-field"></b-col>
                                 <b-col cols="8" style="text-align:left;">Мудрости</b-col>
                            </b-row>
                            <b-row>
                                 <b-col cols="2"><i class="material-icons" style="font-size:16px;"> radio_button_unchecked </i></b-col>
                                 <b-col cols="1" class="bottom-field"></b-col>
                                 <b-col cols="8" style="text-align:left;">Харизмы</b-col>
                            </b-row>
                        </b-card>
                    </b-col>
                </b-row>
                <b-row no-gutters>
                    <b-card id="passive-card" class="text-center mt-1">
                            <b-row no-gutters>
                                <b-col cols="2" style="border-width:1px; border-style:solid; border-color:lightgray;">
                                    +2
                                </b-col>
                                <b-col cols="10" style="border-width:1px; border-style:solid; border-color:lightgray">
                                    Пассивная мудрость (Внимательность)
                                </b-col>
                            </b-row>
                        </b-card>
                </b-row>
                <b-row no-gutters class="mt-2">
                    <b-card id="other-card" footer="Прочие владения и языки" footer-class="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </b-card>
                </b-row>
            </b-col>
            <b-col cols="4">2 of 3</b-col>
            <b-col cols="4">3 of 3</b-col>
        </b-row>
    </b-container>
</template>


<script>
export default {
    name: 'Person'
}
</script>


<style>
    #headerdown{
        border-top-style: solid;
        border-top-width: 1px;
        border-top-color: lightgray;
        font-size: 12px;
    }
    #char-card .card-header{
        font-size: 12px;
        padding: 2px;
    }
    #char-card .card-body{
        padding: 2px;
        font-size: 24px;
    }
    #char-card .card-footer{
        padding: 2px;
    }
    #vd-card .card-body{
        padding: 0px;
        font-size: 16px;
    }
    #mastery-card .card-body{
        padding: 0px;
        font-size: 16px;
    }
    .bottom-field{
        border-bottom: 1px solid lightgray;
    }
    #saving-throws .card-body{
        padding: 3px;
        font-size: 16px;
    }
    #saving-throws .card-footer{
        padding: 0px;
        padding-left: 1px;
        padding-top: 2px;
        font-size: 16px;
    }
    #ability .card-body{
        padding: 0;
        font-size: 12px;
    }
    #ability .card-footer{
        padding: 0;
        background-color: white;
        border: 0;
    }
    #ability .row{
        padding: 2px;
    }
    #passive-card .card-body{
        padding: 0;
        font-size: 16px;
    }
    #other-card .card-footer{
        padding: 0;
        background-color: white;
        border: 0;
        font-size: 12px;
    }
    #other-card .card-body{
        padding: 0;
        border: 1px;
        font-size: 16px;
    }
</style>