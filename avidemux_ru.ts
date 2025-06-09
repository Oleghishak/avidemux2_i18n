<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ru_RU">
<context>
    <name>ADM_Composer</name>
    <message>
        <location filename="../../common/ADM_editor/src/ADM_edit.cpp" line="+509"/>
        <source>Attempt to open %s failed!</source>
        <translation>Ошибка при открытии %s!</translation>
    </message>
    <message>
        <location line="-38"/>
        <source>Cannot find a demuxer for %s</source>
        <translation>Невозможно найти демультиплексор для %s</translation>
    </message>
    <message>
        <location line="+69"/>
        <source>width</source>
        <translation>ширина</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>%sheight</source>
        <translation>%sвысота</translation>
    </message>
    <message>
        <location line="+1"/>
        <source> and </source>
        <translation> и </translation>
    </message>
    <message>
        <location line="+3"/>
        <source>%sdifferent between first and this video stream</source>
        <translation> у первого видеопотока %s от этого</translation>
    </message>
    <message>
        <location line="+1"/>
        <source> are </source>
        <translation> отличны </translation>
    </message>
    <message>
        <location line="+0"/>
        <source> is </source>
        <translation> отлична </translation>
    </message>
    <message>
        <location line="+2"/>
        <source>You cannot mix different video dimensions yet. Using the partial video filter later, will not work around this problem. The workaround is:
1.) &quot;resize&quot; / &quot;add border&quot; / &quot;crop&quot; each stream to the same resolution
2.) concatenate them together</source>
        <translation>Видеопотоки различного разрешения не объединяются. Использование частичного фильтра видео не исправит эту проблему. Выход следующий:
1) «изменить размер» / «добавить рамки» / «обрезать» потоки, приведя их к единому разрешению
2) склеить их вместе</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>The width of the video %u px exceeds maximum supported width %u.
</source>
        <translation>Ширина видео %u пкс превышает максимально поддерживаемую в %u.
</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>The height of the video %u px exceeds maximum supported height %u.
</source>
        <translation>Высота видео %u пкс превышает максимально поддерживаемую в %u.
</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Video dimensions %ux%u exceed maximum supported size %ux%u.
</source>
        <translation>Разрешение видео %ux%u превышает максимально поддерживаемое в %ux%u.
</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Unsupported size</source>
        <translation>Неподдерживаемый размер</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/utils/ADM_edCheckForInvalidPts.cpp" line="+81"/>
        <source>Checking if timestamps are valid..</source>
        <translation>Проверяются метки времени...</translation>
    </message>
    <message>
        <location line="+49"/>
        <source>This video contains B-frames, but presentation time stamps (PTS) are either missing or monotonically increasing. Avidemux can try to reconstruct correct PTS by decoding the entire video. This may take a lot of time. Proceed?</source>
        <translation>Это видео содержит двунаправленные кадры (B-frames), в то время как метки времени показа (PTS) либо отсутствуют, либо монотонно возрастают. Avidemux может попытаться восстановить правильные PTS путём декодирования всего видео. Это может занять много времени. Продолжить?</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Decoding video...</source>
        <translation>Декодирование видео...</translation>
    </message>
    <message>
        <location line="+164"/>
        <source>Some timing information are incorrect.
It happens with some capture software.
If you re encode video we should drop these informations,
 else it will cause dropped frame/jerky video.
If you just copy the video without reencoding,
 you should keep them.
Drop timing informations ?</source>
        <translation>Отдельные тайминги неправильны.
Это случается при использовании некоторых программ для видеозахвата.
При перекодировке эта информация будет сброшена,
 иначе произойдёт потеря кадров или порча видео.
При прямом копировании видео без его перекодировки
 они сохранятся.
Сбросить информацию о таймингах?</translation>
    </message>
</context>
<context>
    <name>CalculatorDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/calculator.ui" line="+16"/>
        <source>Calculator</source>
        <translation>Калькулятор</translation>
    </message>
    <message>
        <location line="+80"/>
        <source>Duration:</source>
        <translation>Длительность:</translation>
    </message>
    <message>
        <location line="+33"/>
        <source>Custom</source>
        <translation>Вручную</translation>
    </message>
    <message>
        <location line="+58"/>
        <source>Custom Size:</source>
        <translation>Ручной размер:</translation>
    </message>
    <message>
        <location line="+196"/>
        <source>Video Size:</source>
        <translation>Размер видео:</translation>
    </message>
    <message>
        <location line="+15"/>
        <location line="+27"/>
        <location line="+34"/>
        <location line="+68"/>
        <location line="+18"/>
        <source>0</source>
        <translation>0</translation>
    </message>
    <message>
        <location line="-101"/>
        <source>Total Size:</source>
        <translation>Общий размер:</translation>
    </message>
    <message>
        <location line="-416"/>
        <source>Target</source>
        <translation>Цель</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>00:00:00</source>
        <translation>00:00:00</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>AVI</source>
        <translation>AVI</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>OGM</source>
        <translation>OGM</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>MPEG</source>
        <translation>MPEG</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Medium:</source>
        <translation>Среднее:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Format:</source>
        <translation>Формат:</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>1 x 80 minute CD</source>
        <translation>1 CD (80 мин)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>2 x 80 minute CD</source>
        <translation>2 CD (80 мин)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>1 x 74 minute CD</source>
        <translation>1 CD (74 мин)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>2 x 74 minute CD</source>
        <translation>2 CD (74 мин)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>DVD-5</source>
        <translation>DVD-5</translation>
    </message>
    <message>
        <location line="+86"/>
        <location line="+198"/>
        <location line="+27"/>
        <location line="+34"/>
        <source>MB</source>
        <translation>МБ</translation>
    </message>
    <message>
        <location line="-217"/>
        <source>Audio Bitrate</source>
        <translation>Битрейт аудио</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Track 1:</source>
        <translation>Дорожка 1:</translation>
    </message>
    <message>
        <location line="+14"/>
        <location line="+37"/>
        <location line="+232"/>
        <source>kbps</source>
        <translation>кбит/с</translation>
    </message>
    <message>
        <location line="-246"/>
        <source>Track 2:</source>
        <translation>Дорожка 2:</translation>
    </message>
    <message>
        <location line="+39"/>
        <source>Result</source>
        <translation>Результат</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Audio Size:</source>
        <translation>Размер аудио:</translation>
    </message>
    <message>
        <location line="+188"/>
        <source>Bits Per Pixel:</source>
        <translation>Бит на пиксель:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Video Bitrate:</source>
        <translation>Битрейт видео:</translation>
    </message>
    <message>
        <location line="+61"/>
        <source>OK</source>
        <translation>Да</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Cancel</source>
        <translation>Отмена</translation>
    </message>
</context>
<context>
    <name>Dialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/T_index_pg.cpp" line="+64"/>
        <source>Indexing</source>
        <translation>Индексация</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Time Left : Infinity</source>
        <translation>Осталось времени: бесконечно</translation>
    </message>
    <message>
        <location line="+1"/>
        <source># Images :</source>
        <translation># изображений:</translation>
    </message>
</context>
<context>
    <name>DialogAudioTracks</name>
    <message>
        <source>Configure</source>
        <translation type="vanished">Настройки</translation>
    </message>
    <message>
        <source>Filters</source>
        <translation type="vanished">Фильтры</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/audioTracks.ui" line="+20"/>
        <source>Audio Tracks Configuration</source>
        <translation>Настройки аудиодорожек</translation>
    </message>
    <message>
        <source>Track 1</source>
        <translation type="vanished">Дорожка 1</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation type="vanished">Включена</translation>
    </message>
    <message>
        <source>Track 2</source>
        <translation type="vanished">Дорожка 2</translation>
    </message>
    <message>
        <source>Track 3</source>
        <translation type="vanished">Дорожка 3</translation>
    </message>
    <message>
        <source>Track 4</source>
        <translation type="vanished">Дорожка 4</translation>
    </message>
</context>
<context>
    <name>DialogOcr</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_ocr/ocr.ui" line="+13"/>
        <source>Dialog</source>
        <translation>Диалог</translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Skip Glyph</source>
        <translation>Пропустить символ</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Ignore</source>
        <translation>Игнорировать</translation>
    </message>
    <message>
        <location line="+55"/>
        <source>Timecode:</source>
        <translation>Временной код:</translation>
    </message>
    <message>
        <location line="-76"/>
        <source>Calibrate</source>
        <translation>Калибровать</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Skip All</source>
        <translation>Пропустить все</translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Ok</source>
        <translation>Да</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Close</source>
        <translation>Закрыть</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>00:00:00/000</source>
        <translation>00:00:00/000</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>0/0</source>
        <translation>0/0</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Nb Lines :</source>
        <translation>№ линий:</translation>
    </message>
</context>
<context>
    <name>DialogProcessing</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/processing.ui" line="+14"/>
        <source>Dialog</source>
        <translation>Ход процесса</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>TimeLeft</source>
        <translation>Осталось времени</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>00:00:00</source>
        <translation>00:00:00</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>ProcessImages</source>
        <translation>Изображений</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>0</source>
        <translation>0</translation>
    </message>
    <message>
        <location line="-30"/>
        <source>Speed</source>
        <translation>Скорость</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>0 fps</source>
        <translation>0 к/с</translation>
    </message>
</context>
<context>
    <name>DialogProgress</name>
    <message>
        <location filename="../ADM_jobs/src/uiProgress.ui" line="+17"/>
        <source>Progress</source>
        <translation>Прогресс</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Current job</source>
        <translation>Текущая операция</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>1/1</source>
        <translation>1/1</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>File being written </source>
        <translation>Файл записывается </translation>
    </message>
    <message>
        <location line="+7"/>
        <source>...</source>
        <translation>...</translation>
    </message>
</context>
<context>
    <name>FDK-AAC</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/fdk-aac/ae_fdk.cpp" line="+450"/>
        <source>_Profile:</source>
        <translation>_Профиль:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bitrate _Mode:</source>
        <translation>Режим _битрейта:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Bitrate:</source>
        <translation>_Битрейт:</translation>
    </message>
    <message>
        <source>SBR enabled</source>
        <translation type="vanished">SBR включён</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Afterburner</source>
        <translation>Улучшенный алгоритм (afterburner)</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>FDK-AAC Configuration</source>
        <translation>Настройки FDK-AAC</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/gui2.ui" line="+368"/>
        <location line="+169"/>
        <source>Copy</source>
        <translation>Копировать</translation>
    </message>
    <message>
        <location line="-152"/>
        <location line="+169"/>
        <location line="+181"/>
        <source>Configure</source>
        <translation>Настройки</translation>
    </message>
    <message>
        <location line="-334"/>
        <location line="+169"/>
        <source>Filters</source>
        <translation>Фильтры</translation>
    </message>
    <message>
        <location line="+27"/>
        <source>&amp;Shift:</source>
        <translation>Сдв&amp;иг:</translation>
    </message>
    <message>
        <location line="+677"/>
        <source>Time:</source>
        <translation>Время:</translation>
    </message>
    <message>
        <location line="-1164"/>
        <source>&amp;Help</source>
        <translation>Сп&amp;равка</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Vi&amp;deo</source>
        <translation>Ви&amp;део</translation>
    </message>
    <message>
        <location line="+54"/>
        <source>&amp;Audio</source>
        <translation>&amp;Звук</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>&amp;File</source>
        <translation>&amp;Файл</translation>
    </message>
    <message>
        <location line="-10"/>
        <source>&amp;Tools</source>
        <translation>&amp;Сервис</translation>
    </message>
    <message>
        <location line="-44"/>
        <source>&amp;Edit</source>
        <translation>&amp;Правка</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>&amp;View</source>
        <translation>&amp;Вид</translation>
    </message>
    <message>
        <location line="+29"/>
        <source>&amp;Custom</source>
        <translation>&amp;Мои скрипты</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>&amp;Go</source>
        <translation>Перех&amp;од</translation>
    </message>
    <message>
        <location line="+293"/>
        <source> (0 tracks)</source>
        <translation> (0 дорожек)</translation>
    </message>
    <message>
        <location line="+600"/>
        <source>Go to previous cut point [SHIFT+DOWN]</source>
        <translation>Перейти к предыдущему разрезу [SHIFT+DOWN]</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Go to next cut point [SHIFT+UP]</source>
        <translation>Перейти к следующему разрезу [SHIFT+UP]</translation>
    </message>
    <message>
        <location line="+645"/>
        <source>&amp;Open...</source>
        <translation>&amp;Открыть...</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>&amp;Information...</source>
        <translation>&amp;Информация...</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Save &amp;Video...</source>
        <translation>Сохранить &amp;видео...</translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+3"/>
        <source>Save Video</source>
        <translation>Сохранить видео</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>HDR tone mapping</source>
        <translation>Тональная компрессия HDR</translation>
    </message>
    <message>
        <location line="+102"/>
        <source>&amp;Load/Run Project...</source>
        <translation>&amp;Загрузить/запустить проект...</translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+3"/>
        <source>Load/Run Project</source>
        <translation>Загрузить/запустить проект</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Save &amp;Project</source>
        <translation>Сохранить &amp;проект</translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+3"/>
        <source>Save Project</source>
        <translation>Сохранить проект</translation>
    </message>
    <message>
        <source>&amp;Calculator...</source>
        <translation type="obsolete">&amp;Калькулятор...</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>&amp;Input</source>
        <translation>&amp;Вход</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>&amp;Output</source>
        <translation>&amp;Выход</translation>
    </message>
    <message>
        <location line="+134"/>
        <source>Si&amp;de</source>
        <translation>С&amp;боку</translation>
    </message>
    <message>
        <location line="-12"/>
        <source>&amp;Top</source>
        <translation>&amp;Сверху</translation>
    </message>
    <message>
        <source>&lt;b&gt;Video Decoder&lt;/b&gt;</source>
        <translation type="vanished">&lt;b&gt;Декодер видео&lt;/b&gt;</translation>
    </message>
    <message>
        <location line="-697"/>
        <source>Frame type:</source>
        <translation>Тип кадра:</translation>
    </message>
    <message>
        <location line="+685"/>
        <source>&amp;Separate</source>
        <translation>&amp;Отделить</translation>
    </message>
    <message>
        <location line="-2014"/>
        <source>Avidemux</source>
        <translation>Avidemux</translation>
    </message>
    <message>
        <location line="+114"/>
        <source>&amp;Toolbars</source>
        <translation>&amp;Панели</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>T&amp;heme</source>
        <translation>&amp;Тема</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>&amp;Auto</source>
        <translation>&amp;Автомат</translation>
    </message>
    <message>
        <location line="+30"/>
        <source>&amp;Recent</source>
        <translation>&amp;Недавнее</translation>
    </message>
    <message>
        <location line="+58"/>
        <source>Codec O&amp;ptions</source>
        <translation>Па&amp;раметры кодека</translation>
    </message>
    <message>
        <source>XXXX</source>
        <translation type="vanished">XXXX</translation>
    </message>
    <message>
        <location line="+45"/>
        <source>&lt;b&gt;Video Output&lt;/b&gt;</source>
        <translation>&lt;b&gt;Видео на выходе&lt;/b&gt;</translation>
    </message>
    <message>
        <location line="+160"/>
        <source>&lt;b&gt;Audio Output&lt;/b&gt;</source>
        <translation>&lt;b&gt;Аудио на выходе&lt;/b&gt;</translation>
    </message>
    <message>
        <location line="+187"/>
        <source>ms</source>
        <translation>мс</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>&lt;b&gt;Output Format&lt;/b&gt;</source>
        <translation>&lt;b&gt;Выходной формат&lt;b&gt;</translation>
    </message>
    <message>
        <location line="+126"/>
        <location line="+1154"/>
        <source>&amp;Navigation</source>
        <translation>&amp;Навигация</translation>
    </message>
    <message>
        <location line="-1079"/>
        <source>Play [SPACE]</source>
        <translation>Играть [SPACE]</translation>
    </message>
    <message>
        <source>Play</source>
        <translation type="vanished">Воспроизвести</translation>
    </message>
    <message>
        <location line="+6"/>
        <location line="+23"/>
        <location line="+23"/>
        <location line="+23"/>
        <location line="+23"/>
        <location line="+23"/>
        <location line="+23"/>
        <location line="+23"/>
        <location line="+23"/>
        <location line="+23"/>
        <location line="+23"/>
        <location line="+23"/>
        <location line="+23"/>
        <location line="+23"/>
        <location line="+23"/>
        <location line="+26"/>
        <location line="+373"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location line="-701"/>
        <source>Go to previous frame [LEFT]</source>
        <translation>Предыдущий кадр [LEFT]</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Go to next frame [RIGHT]</source>
        <translation>Следующий кадр [RIGHT]</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Go to previous keyframe [DOWN]</source>
        <translation>Предыдущий ключевой кадр [DOWN]</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Go to next keyframe [UP]</source>
        <translation>Следующий ключевой кадр [UP]</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Set start marker [CTRL+PAGEUP]</source>
        <translation>Поставить метку начала [CTRL+PAGEUP]</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Delete selection [DEL]</source>
        <translation>Удалить выборку [DEL]</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Set end marker [CTRL+PAGEDOWN]</source>
        <translation>Поставить метку конца [CTRL+PAGEDOWN]</translation>
    </message>
    <message>
        <location line="+69"/>
        <source>Search previous black frame</source>
        <translation>Предыдущий чёрный кадр</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Search next black frame</source>
        <translation>Следующий чёрный кадр</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Go to first frame [HOME]</source>
        <translation>Первый кадр [HOME]</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Go to last frame [END]</source>
        <translation>Последний кадр [END]</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Backward one minute [CTRL+DOWN]</source>
        <translation>Назад на 1 минуту [CTRL+DOWN]</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Forward one minute [CTRL+UP]</source>
        <translation>Вперёд на 1 минуту [CTRL+UP]</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Forward one minute</source>
        <translation>Вперёд на 1 минуту</translation>
    </message>
    <message>
        <location line="+77"/>
        <source>00:00:00.000</source>
        <translation>00:00:00.000</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>/ 00:00:00.000</source>
        <translation>/ 00:00:00.000</translation>
    </message>
    <message>
        <location line="+42"/>
        <source>?</source>
        <translation>?</translation>
    </message>
    <message>
        <location line="+50"/>
        <source>Se&amp;lection</source>
        <translation>&amp;Выборка</translation>
    </message>
    <message>
        <location line="+57"/>
        <source>A:</source>
        <translation>A:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>B:</source>
        <translation>B:</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Go to marker A [PAGE UP]</source>
        <translation>Перейти к метке A [PAGE UP]</translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+16"/>
        <source>000000</source>
        <translation>000000</translation>
    </message>
    <message>
        <location line="-3"/>
        <source>Go to Marker B [PAGE DOWN]</source>
        <translation>Перейти к метке B [PAGE DOWN]</translation>
    </message>
    <message>
        <location line="+260"/>
        <source>Play filtered</source>
        <translation>Воспроизвести с фильтром</translation>
    </message>
    <message>
        <location line="-201"/>
        <source>Vol&amp;ume</source>
        <translation>&amp;Громкость</translation>
    </message>
    <message>
        <location line="-37"/>
        <source>Selection: 000000</source>
        <translation>Выборка: 000000</translation>
    </message>
    <message>
        <location line="+151"/>
        <source>Audio &amp;Metre</source>
        <translation>&amp;Аудиометр</translation>
    </message>
    <message>
        <location line="+50"/>
        <source>Open Video</source>
        <translation>Открыть видео</translation>
    </message>
    <message>
        <location line="+207"/>
        <source>&amp;Codec Options</source>
        <translation>&amp;Параметры кодека</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Ctrl+Alt+C</source>
        <translation>Ctrl+Alt+C</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Ctrl+Alt+N</source>
        <translation>Ctrl+Alt+N</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>&amp;Selection</source>
        <translation>&amp;Выборка</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Ctrl+Alt+S</source>
        <translation>Ctrl+Alt+S</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>&amp;Volume</source>
        <translation>&amp;Громкость</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Ctrl+Alt+V</source>
        <translation>Ctrl+Alt+V</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>&amp;Toolbar</source>
        <translation>&amp;Панель инструментов</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Ctrl+Alt+B</source>
        <translation>Ctrl+Alt+B</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Stat&amp;us bar</source>
        <translation>Па&amp;нель состояния</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Ctrl+Alt+U</source>
        <translation>Ctrl+Alt+U</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>&amp;Audio Metre</source>
        <translation>&amp;Аудиометр</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Ctrl+Alt+M</source>
        <translation>Ctrl+Alt+M</translation>
    </message>
</context>
<context>
    <name>Opus</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/opus/audioencoder_opus.cpp" line="+277"/>
        <source>_Bitrate:</source>
        <translation>_Битрейт:</translation>
    </message>
</context>
<context>
    <name>ScriptShortcutConfigDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/scriptShortcutConfig.ui" line="+20"/>
        <source>User Script Shortcut Configuration</source>
        <translation>Настройка горячих клавиш для скриптов пользователя</translation>
    </message>
    <message>
        <location line="+127"/>
        <source>Toolbar</source>
        <translation>На панель</translation>
    </message>
</context>
<context>
    <name>SpiderMonkeyShell</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_shell/shell.ui" line="+17"/>
        <source>Shell</source>
        <translation>Командная строка</translation>
    </message>
    <message>
        <location line="+45"/>
        <source>Clear</source>
        <translation>Очистить</translation>
    </message>
    <message>
        <location line="+44"/>
        <source>Evaluate</source>
        <translation>Выполнить</translation>
    </message>
</context>
<context>
    <name>VapourSynthProxy</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/VapourSynth/qt4/vs.ui" line="+14"/>
        <source>VapourSynth Proxy</source>
        <translation>Прокси VapourSynth</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Select VS file</source>
        <translation>Выбрать файл VS</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Port to use: </source>
        <translation>Используемый порт: </translation>
    </message>
    <message>
        <location line="+24"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Run!</source>
        <translation>Запуск!</translation>
    </message>
</context>
<context>
    <name>aarotate</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/rotate/rotate.cpp" line="+437"/>
        <source>Arbitrary Rotate</source>
        <translation>Произвольный поворот</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rotate the image by arbitrary angle.</source>
        <translation>Повернуть изображение на произвольный угол.</translation>
    </message>
    <message>
        <location line="+186"/>
        <source>Black</source>
        <translation>Зачернить</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Echo</source>
        <translation>Эхо</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>_Angle:</source>
        <translation>_Угол:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Padding:</source>
        <translation>Отступы:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Rotate</source>
        <translation>Поворот</translation>
    </message>
</context>
<context>
    <name>aboutDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/about.ui" line="+14"/>
        <source>About Avidemux</source>
        <translation>О программе</translation>
    </message>
    <message>
        <location line="+92"/>
        <source>Avidemux</source>
        <translation>Avidemux</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Multi-platform Video Editor</source>
        <translation>Многоплатформенный видеоредактор</translation>
    </message>
    <message>
        <source>Avidemux </source>
        <translation type="vanished">Avidemux </translation>
    </message>
    <message>
        <location line="+10"/>
        <source>© 2001 - 2021  Mean / eumagga0x2a</source>
        <translation>© 2001 - 2021  Mean / eumagga0x2a</translation>
    </message>
    <message>
        <source>http://www.avidemux.org</source>
        <translation type="vanished">http://www.avidemux.org</translation>
    </message>
    <message>
        <location line="+66"/>
        <source>&amp;License</source>
        <translation>&amp;Лицензия</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>OK</source>
        <translation>ОК</translation>
    </message>
</context>
<context>
    <name>addBorder</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/addBorder/ADM_vidAddBorder.cpp" line="+183"/>
        <source>_Left border:</source>
        <translation>Поле с_лева:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Right border:</source>
        <translation>Поле с_права:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Top border:</source>
        <translation>_Поле с_верху:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Bottom border:</source>
        <translation>Поле с_низу:</translation>
    </message>
    <message>
        <location line="+3"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/addBorder/ADM_vidAddBorder.h" line="+42"/>
        <source>Add Borders</source>
        <translation>Добавить поля</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Incorrect parameters</source>
        <translation>Неверные параметры</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>All parameters must be even and within range.</source>
        <translation>Все параметры должны быть чётными и укладываться в пределы.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/addBorder/ADM_vidAddBorder.h" line="+1"/>
        <source>Add black borders around the image.</source>
        <translation>Добавить чёрные поля вокруг изображения.</translation>
    </message>
</context>
<context>
    <name>adm</name>
    <message>
        <location filename="../ADM_commonUI/DIA_prefs.cpp" line="+715"/>
        <source>Decode video using DXVA2 (windows)</source>
        <translation>Декодировать видео с помощью DXVA2 (Windows)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Ignore driver blacklist (Intel)</source>
        <translation>Игнорировать чёрный список (Intel)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Ignore codec blacklist (Intel, HEVC 10bit)</source>
        <translation>Игнорировать чёрный список (Intel, HEVC 10bit)</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Enabling Hw decoding disables multi-threading, restart application to apply changes</source>
        <translation>Включение аппаратного ускорения отключает многопоточность, изменения требуют перезапуска приложения</translation>
    </message>
    <message>
        <location line="-422"/>
        <source>_Accept non-standard audio frequency for DVD</source>
        <translation>_Разрешать нестандартную частоту звука для DVD</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Revert to saved default output settings on video load</source>
        <translation>_Сбрасывать настройки выхода на сохранённые при загрузке видео</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Enable alternative keyboard shortcuts</source>
        <translation>_Включить альтернативные горячие клавиши</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Re_verse UP and DOWN arrow keys for navigation</source>
        <translation>_Обратить действие клавиш ВВЕРХ и ВНИЗ при навигации</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reverse mouse _wheel for navigation</source>
        <translation>Обратить направление _колеса мыши при навигации</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>_Swap markers if marker A is set past marker B or marker B before A in video</source>
        <translation>_Менять при необходимости местами значения меток выборки вместо сброса ранее поставленной метки</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Enable all SIMD</source>
        <translation>Включить все SIMD</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable MMX</source>
        <translation>Включить MMX</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable MMXEXT</source>
        <translation>Включить MMXEXT</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable 3DNOW</source>
        <translation>Включить 3DNOW</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable 3DNOWEXT</source>
        <translation>Включить 3DNOWEXT</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable SSE</source>
        <translation>Включить SSE</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable SSE2</source>
        <translation>Включить SSE2</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable SSE3</source>
        <translation>Включить SSE3</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable SSSE3</source>
        <translation>Включить SSSE3</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable SSE4</source>
        <translation>Включить SSE4</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable SSE4.2</source>
        <translation>Включить SSE4.2</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable AVX</source>
        <translation>Включить AVX</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable AVX2</source>
        <translation>Включить AVX2</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable FMA3</source>
        <translation>Включить FMA3</translation>
    </message>
    <message>
        <location line="+41"/>
        <source>_lavc threads:</source>
        <translation>_Потоки декодера libavcodec:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Multi-threading is disabled internally if HW accelerated decoding is enabled, restart application to apply changes</source>
        <translation>Многопоточность автоматически отключается при включении аппаратного ускорения, изменения требуют перезапуска приложения</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Multi-threading</source>
        <translation>Многопоточность</translation>
    </message>
    <message>
        <location line="+7"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+47"/>
        <source>High</source>
        <translation>Высокий</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Above normal</source>
        <translation>Выше обычного</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Normal</source>
        <translation>Обычный</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Below normal</source>
        <translation>Ниже обычного</translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="-2"/>
        <source>Low</source>
        <translation>Низкий</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>_Encoding priority:</source>
        <translation>Приоритет _кодирования:</translation>
    </message>
    <message>
        <source>_Indexing/unpacking priority:</source>
        <translation type="vanished">_Приоритет индексации/распаковки:</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>_Playback priority:</source>
        <translation>Приоритет воспрои_зведения:</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>Prioritisation</source>
        <translation>Приоритизация</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Priority can be only lowered and applies to the entire application for the current session</source>
        <translation>Приоритет может быть только понижен и применяется ко всему приложению для текущего сеанса</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>_Default to the directory of the last read file for saving</source>
        <translation>_Сохранять видео в папке с последним прочитанным файлом по умолчанию</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>De_lete first pass log files by default</source>
        <translation>_Удалять файлы статистики от первого прохода по умолчанию</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Auto-Append Settings</source>
        <translation>Автоматическое объединение расчленённых потоков</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Use custom fragment size for auto-append of MPEG-TS files</source>
        <translation>_Использовать нестандартный размер фрагментов при автоприсоединении файлов MPEG-TS</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Fragment size:</source>
        <translation>Размер _фрагментов:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Pictures</source>
        <translation>Загрузка изображений</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Load sequentially named pictures in reverse order</source>
        <translation>Загружать последовательно именованные файлы в обратном порядке</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>23.976 (Film)</source>
        <translation>23,976 (Film)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>25 (PAL)</source>
        <translation>25 (PAL)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>29.970 (NTSC)</source>
        <translation>29,970 (NTSC)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>30</source>
        <translation>30</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>50 (PAL)</source>
        <translation>50 (PAL)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>59.940 (NTSC)</source>
        <translation>59,940 (NTSC)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>60</source>
        <translation>60</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Assign following standard frame rate:</source>
        <translation>_Назначить следующую стандартную частоту кадров:</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Avisynth</source>
        <translation>Avisynth</translation>
    </message>
    <message>
        <location line="+203"/>
        <source>Default out of gamut handling:</source>
        <translation>Стандартная обработка вне гаммы:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>HDR</source>
        <translation>HDR</translation>
    </message>
    <message>
        <location line="-11"/>
        <source>Default _tone mapping method:</source>
        <translation>Стандартный метод _тональной компрессии:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Target peak luminance (nits):</source>
        <translation>Целевая пиковая яркость (ниты):</translation>
    </message>
    <message>
        <location line="-189"/>
        <source>Use _shared cache</source>
        <translation>Использовать _общий кэш</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>This renderer provides no hardware acceleration</source>
        <translation>Этот вывод видео лишён аппаратного ускорения</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>DXVA2</source>
        <translation>DXVA2</translation>
    </message>
    <message>
        <location line="+4"/>
        <location line="+196"/>
        <source>OpenGL</source>
        <translation>OpenGL</translation>
    </message>
    <message>
        <location line="-192"/>
        <source>LibVA</source>
        <translation>LibVA</translation>
    </message>
    <message>
        <source>XVideo (best)</source>
        <translation type="vanished">XVideo (лучший)</translation>
    </message>
    <message>
        <source>DXVA2 (best)</source>
        <translation type="vanished">DXVA2 (лучший)</translation>
    </message>
    <message>
        <source>SDL (good)</source>
        <translation type="vanished">SDL (хороший)</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Video _display:</source>
        <translation>_Метод вывода видео:</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>No alerts</source>
        <translation>Без сообщений</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Display only error alerts</source>
        <translation>Только сообщения об ошибках</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Display all alerts</source>
        <translation>Все сообщения</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Message level:</source>
        <translation>_Уровень сообщений:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Master</source>
        <translation>Мастер</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Volume control:</source>
        <translation>_Управление громкостью:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>No downmixing</source>
        <translation>Без даунмикса</translation>
    </message>
    <message>
        <location filename="../ADM_commonUI/DIA_audioFilter.cpp" line="+103"/>
        <location filename="../ADM_commonUI/DIA_prefs.cpp" line="+1"/>
        <source>Stereo</source>
        <translation>Стерео</translation>
    </message>
    <message>
        <location filename="../ADM_commonUI/DIA_prefs.cpp" line="+5"/>
        <source>_Local playback downmixing:</source>
        <translation>_Даунмикс при локальном воспроизведении:</translation>
    </message>
    <message>
        <source>The options above are effective only for MPEG and DivX with software decoding</source>
        <translation type="vanished">Эти параметры действуют только для MPEG и DivX без аппаратного ускорения декодирования</translation>
    </message>
    <message>
        <location filename="../ADM_commonUI/DIA_postproc.cpp" line="+25"/>
        <source>The options above are effective only for software decoding</source>
        <translation>Эти параметры действуют только для программного декодирования</translation>
    </message>
    <message>
        <location line="+17"/>
        <location filename="../ADM_commonUI/DIA_prefs.cpp" line="+87"/>
        <source>_Horizontal deblocking</source>
        <translation>_Горизонтальное устранение блочности</translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../ADM_commonUI/DIA_prefs.cpp" line="+1"/>
        <source>_Vertical deblocking</source>
        <translation>_Вертикальнне устранение блочности</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>De_interlacing (ffmpegdeint)</source>
        <translation>_Деинтерлейсинг (ffmpegdeint)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Deblocking</source>
        <translation>Устранение блочности</translation>
    </message>
    <message>
        <location filename="../ADM_commonUI/DIA_prefs.cpp" line="+4"/>
        <source>Default Postprocessing</source>
        <translation>Постобработка по умолчанию</translation>
    </message>
    <message>
        <location line="-33"/>
        <source>User Interface</source>
        <translation>Интерфейс</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Output</source>
        <translation>Выход</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="+58"/>
        <location line="+10"/>
        <location line="+281"/>
        <location line="+14"/>
        <location line="+19"/>
        <location line="+7"/>
        <location filename="../../common/gui_savenew.cpp" line="+441"/>
        <location filename="../ADM_commonUI/DIA_plugins.cpp" line="+89"/>
        <location filename="../ADM_commonUI/DIA_prefs.cpp" line="+6"/>
        <location line="+3"/>
        <location line="+5"/>
        <source>Audio</source>
        <translation>Звук</translation>
    </message>
    <message>
        <location filename="../../common/gui_savenew.cpp" line="-248"/>
        <location line="+172"/>
        <location line="+14"/>
        <location line="+16"/>
        <source>Video</source>
        <translation>Видео</translation>
    </message>
    <message>
        <location filename="../ADM_commonUI/DIA_prefs.cpp" line="+145"/>
        <source>Threading</source>
        <translation>Многопоточность</translation>
    </message>
    <message>
        <location filename="../ADM_commonUI/myOwnMenu.h" line="+86"/>
        <source>Pr&amp;eferences</source>
        <translation>&amp;Настройки</translation>
    </message>
    <message>
        <location filename="../ADM_commonUI/DIA_prefs.cpp" line="+10"/>
        <source>Preferences</source>
        <translation>Настройки</translation>
    </message>
    <message>
        <location filename="../ADM_commonUI/myOwnMenu.h" line="-37"/>
        <source>Connect to avsproxy</source>
        <translation>Соединиться с AvsProxy</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Copy</source>
        <translation>Копировать</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Set Marker A</source>
        <translation>Поставить метку А</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Set Marker B</source>
        <translation>Поставить метку B</translation>
    </message>
    <message>
        <location line="+22"/>
        <location line="+10"/>
        <source>Filters</source>
        <translation>Фильтры</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>Play/Stop</source>
        <translation>Старт/стоп</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Previous Intra Frame</source>
        <translation>Предыдущий ключевой кадр</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Next Intra Frame</source>
        <translation>Следующий ключевой кадр</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Previous Black Frame</source>
        <translation>Предыдущий чёрный кадр</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Next Black Frame</source>
        <translation>Следующий чёрный кадр</translation>
    </message>
    <message>
        <location filename="../ADM_commonUI/DIA_audioFilter.cpp" line="-37"/>
        <source>R_esampling (Hz):</source>
        <translation>Передискретизация (Гц):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Resampling frequency (Hz)</source>
        <translation>Новая частота (Гц)</translation>
    </message>
    <message>
        <location line="+4"/>
        <location line="+44"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="-2"/>
        <source>None</source>
        <translation>Нет</translation>
    </message>
    <message>
        <location line="-39"/>
        <source>_Frame rate change:</source>
        <translation>_Изменить кадровую частоту:</translation>
    </message>
    <message>
        <location line="+25"/>
        <source>No change</source>
        <translation>Без изменений</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Mono</source>
        <translation>Моно</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>5 channels</source>
        <translation>5 каналов</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>_Gain mode:</source>
        <translation>_Режим усиления:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>G_ain value:</source>
        <translation>З_начение усиления:</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>_Mixer:</source>
        <translation>_Микшер:</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Enable Equalizer</source>
        <translation>Включить эквалайзер</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bass (dB):</source>
        <translation>Низкие частоты (дБ):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bass/Mid cut-off (Hz):</source>
        <translation>Срез низких/средних частот (Гц):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Mid (dB):</source>
        <translation>Средние частоты (дБ):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Mid/Treble cut-off (Hz):</source>
        <translation>Срез средних/высоких частот (Гц):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Treble (dB):</source>
        <translation>Высокие частоты (дБ):</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>&lt;hr&gt;&lt;p&gt;It is highly recommended to enable normalization when using positive gain values&lt;/p&gt;</source>
        <translation>&lt;hr&gt;&lt;p&gt;Рекомендуется включить нормализацию при использовании положительных значений усиления&lt;/p&gt;</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Equalizer</source>
        <translation>Эквалайзер</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Front left (dB):</source>
        <translation>Передний левый канал (дБ):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Front right (dB):</source>
        <translation>Передний правый канал (дБ):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Front center (dB):</source>
        <translation>Передний центральный канал (дБ):</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Rear left (dB):</source>
        <translation>Задний левый канал (дБ):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear right (dB):</source>
        <translation>Задний правый канал (дБ):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear center (dB):</source>
        <translation>Задний центральный канал (дБ):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Side left (dB):</source>
        <translation>Боковой левый канал (дБ):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Side right (dB):</source>
        <translation>Боковой правый канал (дБ):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Low-frequency effects (LFE) (dB):</source>
        <translation>Канал низкочастотных эффектов (LFE) (дБ):</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Channel gains</source>
        <translation>Усиление каналов</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Front left (ms):</source>
        <translation>Передний левый канал (мс):</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Front right (ms):</source>
        <translation>Передний правый канал (мс):</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Front center (ms):</source>
        <translation>Передний центральный канал (мс):</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Rear left (ms):</source>
        <translation>Задний левый канал (мс):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear right (ms):</source>
        <translation>Задний правый канал (мс):</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Rear center (ms):</source>
        <translation>Задний центральный канал (мс):</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Side left (ms):</source>
        <translation>Боковой левый канал (мс):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Side right (ms):</source>
        <translation>Боковой правый канал (мс):</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Low-frequency effects (LFE) (ms):</source>
        <translation>Канал низкочастотных эффектов (LFE) (мс):</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>&lt;hr&gt;&lt;p&gt;The final delay will be the sum of a value above and the &quot;Shift audio&quot; value provided on the Main tab&lt;/p&gt;</source>
        <translation>&lt;hr&gt;&lt;p&gt;Конечная задержка будет суммой приведённого выше значения и значения «Сдвига аудио», указанного во вкладке «Основное»&lt;/p&gt;</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Channel delays</source>
        <translation>Задержка каналов</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Enable Remap</source>
        <translation>Включить переназначение</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Front left</source>
        <translation>Передний левый канал</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Front right</source>
        <translation>Передний правый канал</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Front center</source>
        <translation>Передний центральный канал</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Side left</source>
        <translation>Боковой левый канал</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Side right</source>
        <translation>Боковой правый канал</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear left</source>
        <translation>Задний левый канал</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear right</source>
        <translation>Задний правый канал</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear center</source>
        <translation>Задний центральный канал</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Low-frequency effects (LFE)</source>
        <translation>Канал низкочастотных эффектов (LFE)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Front left to:</source>
        <translation>Передний левый канал на:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Front right to:</source>
        <translation>Передний правый канал на:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Front center to:</source>
        <translation>Передний центральный канал на:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Side left to:</source>
        <translation>Боковой левый канал на:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Side right to:</source>
        <translation>Боковой правый канал на:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear left to:</source>
        <translation>Задний левый канал на:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear right to:</source>
        <translation>Задний правый канал на:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rear center to:</source>
        <translation>Задний центральный канал на:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Low-frequency effects (LFE) to:</source>
        <translation>Канал низкочастотных эффектов (LFE) на:</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>&lt;hr&gt;&lt;p&gt;Remapping does not change the channel layout, therefore:&lt;/p&gt;&lt;ul&gt;&lt;li&gt;mapping a channel to a non-existent one will result in loss of the channel&lt;/li&gt;&lt;li&gt;mapping a non-existent channel will result in silence&lt;/li&gt;&lt;/ul&gt;</source>
        <translation>&lt;hr&gt;&lt;p&gt;Переназначение не меняет схему каналов, поэтому:&lt;/p&gt;&lt;ul&gt;&lt;li&gt;назначение канала на несуществующий приведёт к его потере&lt;/li&gt;&lt;li&gt;назначение несуществующего канала приведёт к тишине&lt;/li&gt;&lt;/ul&gt;</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Channel remap</source>
        <translation>Переназначение каналов</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Audio Filters</source>
        <translation>Фильтры аудио</translation>
    </message>
    <message>
        <location filename="../ADM_commonUI/DIA_builtin.cpp" line="+90"/>
        <source>Libraries</source>
        <translation>Библиотеки</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Built-in Support</source>
        <translation>Встроенная поддержка</translation>
    </message>
    <message>
        <location filename="../ADM_commonUI/DIA_jobs_save.cpp" line="+8"/>
        <source>_Job name:</source>
        <translation>_Имя задания:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Select Video To Write</source>
        <translation>Выбор видео для записи</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Save Job</source>
        <translation>Сохранение задания</translation>
    </message>
    <message>
        <location filename="../../common/gui_autodrive.cpp" line="+64"/>
        <location line="+14"/>
        <location line="+31"/>
        <location line="+6"/>
        <location line="+15"/>
        <location line="+27"/>
        <location line="+35"/>
        <source>Codec Error</source>
        <translation>Ошибка кодека</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="+399"/>
        <source>Not coded in this version</source>
        <translation>Нет в этой версии</translation>
    </message>
    <message>
        <location line="+238"/>
        <source>This video uses non-IDR recovery points instead of IDR as keyframes. Picture reordering information in the video stream is not reset at non-IDR frames. The cut points of the pasted selection may result in playback interruption due to reversed display order of frames if saved in copy mode.
Proceed anyway?</source>
        <translation>Это видео использует кадры прямого доступа без мгновенного обновления декодирования (non-IDR). Счётчик очерёдности показа изображений (POC) на таких ключевых кадрах не сбрасывается. Образовавшиеся точки разреза вставки при сохранении видео в режиме копирования могут привести к задержке воспроизведения из-за нарушенного порядка показа изображений.
Всё равно продолжить?</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Codec or codec settings across a cut point of the pasted video do not match.
Playback of the video saved in copy mode may stop at this point.
Proceed anyway?</source>
        <translation>Кодек или параметры кодирования на точках разреза вставки не совпадают. Воспроизведение видео, сохранённого в режиме копирования, может на этих точках обрываться.
Всё равно продолжить?</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Cut points of the pasted video could not be checked. This indicates an issue with a source video, the state of editing or a bug in the program. Please check the application log file or console output for details.
Try anyway?</source>
        <translation>Не удалось проверить точки разреза вставки. Это указывает на проблему либо с исходным видео, либо с шагами редактирования, либо является проявлением ошибки в программе. За деталями обратитесь, пожалуйста, к журнальному файлу приложения или к консольным сообщениям.
Всё равно продолжить?</translation>
    </message>
    <message>
        <location line="+83"/>
        <source>Are you sure?</source>
        <translation>Вы уверены?</translation>
    </message>
    <message>
        <location line="+49"/>
        <source>It is impossible to cut out the entire video. Please recheck the position of markers A and B.</source>
        <translation>Вырезать всё видео целиком невозможно. Пожалуйста, проверьте положение меток A и B.</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Deleting</source>
        <translation>Удаление</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>It is impossible to delete the entire video. Please recheck the position of markers A and B.</source>
        <translation>Удалить видео целиком недопустимо. Пожалуйста, проверьте положение меток A и B.</translation>
    </message>
    <message>
        <location line="+31"/>
        <source>The end point of the cut is not on a keyframe.
Video saved in copy mode will be corrupted at this point.
Proceed anyway?</source>
        <translation>Конечная точка вырезки находится не на ключевом кадре. При сохранении видео в режиме копирования на этом месте будут повреждения.
Всё равно продолжить?</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>The end point of the deletion is not on a keyframe.
Video saved in copy mode will be corrupted at this point.
Proceed anyway?</source>
        <translation>Конечная точка удаления находится не на ключевом кадре. При сохранении видео в режиме копирования на этом месте будут повреждения.
Всё равно продолжить?</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>This video uses non-IDR recovery points instead of IDR as keyframes. Picture reordering information in the video stream is not reset at non-IDR frames. The chosen start and end points of the cut may result in playback interruption due to reversed display order of frames if saved in copy mode.
Proceed anyway?</source>
        <translation>Это видео использует кадры прямого доступа без мгновенного обновления декодирования (non-IDR). Счётчик очерёдности показа изображений (POC) на таких ключевых кадрах не сбрасывается. Выбранные конечные точки выреза при сохранении видео в режиме копирования могут привести к задержке воспроизведения из-за нарушенного порядка показа изображений.
Всё равно продолжить?</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>This video uses non-IDR recovery points instead of IDR as keyframes. Picture reordering information in the video stream is not reset at non-IDR frames. The chosen start and end points of the deletion may result in playback interruption due to reversed display order of frames if saved in copy mode.
Proceed anyway?</source>
        <translation>Это видео использует кадры прямого доступа без мгновенного обновления декодирования (non-IDR). Счётчик очерёдности показа изображений (POC) на таких ключевых кадрах не сбрасывается. Выбранные конечные точки удаления при сохранении видео в режиме копирования могут привести к задержке воспроизведения из-за нарушенного порядка показа изображений.
Всё равно продолжить?</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Codec or codec settings across the cut do not match. Playback of the video saved in copy mode may stop at this point.
Proceed anyway?</source>
        <translation>Кодек или параметры кодирования на точках разреза не совпадают. Воспроизведение видео, сохранённого в режиме копирования, может на этих точках обрываться.
Всё равно продолжить?</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Codec or codec settings across the deletion do not match. Playback of the video saved in copy mode may stop at this point.
Proceed anyway?</source>
        <translation>Кодек или параметры кодирования на точках разреза не совпадают. Воспроизведение видео, сохранённого в режиме копирования, может на этих точках обрываться.
Всё равно продолжить?</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Cut points could not be checked.
This indicates an issue with a source video, the state of editing or a bug in the program. Please check the application log file or console output for details.
Proceed anyway?</source>
        <translation>Не удалось проверить точки разреза. Это указывает на проблему либо с исходным видео, либо с шагами редактирования, либо является проявлением ошибки в программе. За деталями обратитесь, пожалуйста, к журнальному файлу приложения или к консольным сообщениям.
Всё равно продолжить?</translation>
    </message>
    <message>
        <location line="+124"/>
        <source>Permission error</source>
        <translation>Ошибка прав доступа</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Cannot open &quot;%s&quot;.</source>
        <translation>Невозможно открыть «%s».</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>File error</source>
        <translation>Ошибка файла</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>&quot;%s&quot; does not exist.</source>
        <translation>«%s» не существует.</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Cannot open project using the video loader.</source>
        <translation>Невозможно открыть проект, используя загрузчик видео.</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Try &apos;File&apos; -&gt; &apos;Load/Run Project...&apos;</source>
        <translation>Попробуйте «Файл-&gt;Загрузить/запустить проект...»</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Could not open the file</source>
        <translation>Невозможно открыть файл</translation>
    </message>
    <message>
        <location line="+57"/>
        <source>Multiple Audio Tracks</source>
        <translation>Несколько звуковых дорожек</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The file you just loaded contains several audio tracks.
Go to Audio-&gt;MainTrack to select the active one.</source>
        <translation>Файл содержит несколько звуковых дорожек.
Выберите главную через меню «Аудио-&gt;Главная дорожка».</translation>
    </message>
    <message>
        <location line="+106"/>
        <source>Something failed when appending</source>
        <translation>Ошибка при добавлении видео</translation>
    </message>
    <message>
        <location line="+317"/>
        <source>Something bad happened (II)</source>
        <translation>Ошибка при обновлении видео (II)</translation>
    </message>
    <message>
        <location line="-206"/>
        <location line="+44"/>
        <source>The tinypy plugin is missing.
Expect problems.</source>
        <translation>Плагин tinyPy отсутствует.
Возможны проблемы.</translation>
    </message>
    <message>
        <location line="+104"/>
        <source>Checking video</source>
        <translation>Проверка видео</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>No error found</source>
        <translation>Ошибки не найдены</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Errors found in %u frames</source>
        <translation>Найдены ошибки в %u кадрах</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Marker A &gt; B</source>
        <translation>Метка A &gt; B</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Cannot delete the selection.</source>
        <translation>Невозможно удалить выборку.</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>You can&apos;t remove all frames</source>
        <translation>Вы не можете удалить все кадры</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Something bad happened</source>
        <translation>Ошибка при открытии файла для записи</translation>
    </message>
    <message>
        <location line="+116"/>
        <source>_Track from video:</source>
        <translation>_Дорожка из видео:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Main Audio Track</source>
        <translation>Главная звуковая дорожка</translation>
    </message>
    <message>
        <location line="+292"/>
        <source>Failed to connect to avsproxy.
Is it running ?</source>
        <translation>Невозможно соединиться с AvsProxy.
Он запущен?</translation>
    </message>
    <message>
        <location line="+40"/>
        <source>Frame type:</source>
        <translation>Тип кадра:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Frame size:</source>
        <translation>Размер кадра:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Frame Hex Dump</source>
        <translation>Шестнадцатеричный дамп кадра</translation>
    </message>
    <message>
        <location filename="../ADM_commonUI/DIA_gototime.cpp" line="+36"/>
        <source>Go to Time</source>
        <translation>Переход</translation>
    </message>
    <message>
        <location filename="../ADM_commonUI/DIA_postproc.cpp" line="-21"/>
        <source>_Filter strength:</source>
        <translation>_Уровень фильтрации:</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="-235"/>
        <source>Select Workbench to Save</source>
        <translation>Выберите инструмент для сохранения</translation>
    </message>
    <message>
        <location line="+11"/>
        <location line="+3"/>
        <source>Select File to Save Audio</source>
        <translation>Выберите файл для сохранения звука</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Select JPEG Sequence to Save</source>
        <translation>Выберите последовательность JPEG для сохранения</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Select BMP to Save</source>
        <translation>Выберите BMP для сохранения</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Select JPEG to Save</source>
        <translation>Выберите JPEG для сохранения</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Select File to Save</source>
        <translation>Укажите файл для сохранения</translation>
    </message>
    <message>
        <location line="+59"/>
        <source>Saving audio</source>
        <translation>Сохранение аудио</translation>
    </message>
    <message>
        <location line="+331"/>
        <source>Maximum number of 99999 images reached.</source>
        <translation>Предел в 99999 кадров достигнут.</translation>
    </message>
    <message>
        <location line="+2"/>
        <location line="+78"/>
        <source>Done</source>
        <translation>Выполнено</translation>
    </message>
    <message>
        <location line="-78"/>
        <source>Saved %d images.</source>
        <translation>Сохранено изображений: %d.</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/ADM_segment.cpp" line="+860"/>
        <location line="+50"/>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_dxva2.cpp" line="+86"/>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_libva.cpp" line="+150"/>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_vdpau_utils.cpp" line="+58"/>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_xvba.cpp" line="+134"/>
        <location filename="../../common/gui_main.cpp" line="-275"/>
        <location line="+35"/>
        <location line="+29"/>
        <location line="+11"/>
        <location line="+8"/>
        <location filename="../../common/gui_save.cpp" line="+3"/>
        <location line="+95"/>
        <location line="+7"/>
        <location line="+21"/>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="+70"/>
        <source>Error</source>
        <translation>Ошибка</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="-69"/>
        <source>BMP op failed</source>
        <translation>Ошибка открытия BMP</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Saving %s as a BMP file failed.</source>
        <translation>Ошибка сохранения «%s» в BMP.</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>File %s has been successfully saved.</source>
        <translation>Файл «%s» успешно сохранён.</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed</source>
        <translation>Ошибка</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>File %s was NOT saved correctly.</source>
        <translation>Файл «%s» сохранён некорректно.</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/T_threadCount.cpp" line="+47"/>
        <location filename="../ADM_commonUI/DIA_audioFilter.cpp" line="-210"/>
        <source>Custom</source>
        <translation>Вручную</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+3"/>
        <source>Medium</source>
        <translation>Среднее</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Limited Search</source>
        <translation>Ограниченный поиск</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Medium Search</source>
        <translation>Средний поиск</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Wide Search</source>
        <translation>Широкий поиск</translation>
    </message>
    <message>
        <location filename="../ADM_commonUI/DIA_audioFilter.cpp" line="+45"/>
        <source>Gain</source>
        <translation>Усилитель</translation>
    </message>
    <message>
        <location line="-47"/>
        <source>Film to PAL</source>
        <translation>Из Film в PAL</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>PAL to Film</source>
        <translation>Из PAL в Film</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Tempo multiplier:</source>
        <translation>Множитель темпа:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>A value of 2.0 means twice as fast playback.</source>
        <translation>Значение 2,0 означает вдвое более быстрое воспроизведение.</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Pitch multiplier:</source>
        <translation>Множитель высоты тона:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Every doubling means one octave upshift</source>
        <translation>Каждое удвоение означает сдвиг на одну октаву вверх</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Frame rate change</source>
        <translation>Смена кадровой частоты</translation>
    </message>
    <message>
        <location line="+9"/>
        <location filename="../ADM_commonUI/DIA_prefs.cpp" line="-242"/>
        <source>Stereo headphones</source>
        <translation>Стереонаушники</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Stereo+surround</source>
        <translation>Стерео + объёмный звук</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Stereo+center</source>
        <translation>Стерео + центр</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Stereo+center+surround</source>
        <translation>Стерео + центр + объёмный звук</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Stereo front+stereo rear</source>
        <translation>Стерео (передний) + стерео (задний)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>5.1</source>
        <translation>5.1</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Dolby Pro Logic</source>
        <translation>Dolby Pro Logic</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Dolby Pro Logic II</source>
        <translation>Dolby Pro Logic II</translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../ADM_commonUI/DIA_prefs.cpp" line="+3"/>
        <source>Surround headphones</source>
        <translation>Наушники объёмного звучания</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Shift audio (ms):</source>
        <translation>Сдвиг аудио (мс):</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Enable Compressor</source>
        <translation>Включить компрессор (DRC)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Normalize</source>
        <translation>Нормализация</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Threshold (dB):</source>
        <translation>Порог срабатывания (дБ):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Noise floor (dB):</source>
        <translation>Нижний порог шумов (дБ):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ratio:</source>
        <translation>Степень сжатия:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Attack time (sec):</source>
        <translation>Время атаки (с):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Release time (sec):</source>
        <translation>Время спада (с):</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>DRC</source>
        <translation>Компрессор</translation>
    </message>
    <message>
        <location line="-47"/>
        <source>Automatic</source>
        <translation>Автоматический</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Manual (dB)</source>
        <translation>Вручную (дБ)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>_Maximum value:</source>
        <translation>_Максимальное значение:</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Remix</source>
        <translation>Ремикшировать</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Mixer</source>
        <translation>Микшер</translation>
    </message>
    <message>
        <source>Shift audio:</source>
        <translation type="vanished">Сдвиг аудио:</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Shift Value (ms):</source>
        <translation>Значение сдвига (мс):</translation>
    </message>
    <message>
        <location filename="../ADM_commonUI/DIA_builtin.cpp" line="-18"/>
        <source>Fontconfig</source>
        <translation>Настройки шрифта</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>FreeType 2</source>
        <translation>FreeType 2</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Gettext</source>
        <translation>Gettext</translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../ADM_commonUI/DIA_prefs.cpp" line="-48"/>
        <source>SDL</source>
        <translation>SDL</translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../ADM_commonUI/DIA_prefs.cpp" line="-20"/>
        <source>XVideo</source>
        <translation>XVideo</translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../ADM_commonUI/DIA_prefs.cpp" line="+4"/>
        <source>VDPAU</source>
        <translation>VDPAU</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>x86</source>
        <translation>x86</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>x86-64</source>
        <translation>x86-64</translation>
    </message>
    <message>
        <location line="+6"/>
        <location filename="../ADM_commonUI/DIA_prefs.cpp" line="+289"/>
        <source>CPU</source>
        <translation>ЦП</translation>
    </message>
    <message>
        <location filename="../ADM_commonUI/DIA_gototime.cpp" line="-3"/>
        <source>TimeStamp:</source>
        <translation>Временная метка:</translation>
    </message>
    <message>
        <location filename="../ADM_commonUI/DIA_jobs_save.cpp" line="-4"/>
        <source>Output _File:</source>
        <translation>Выходной _файл:</translation>
    </message>
    <message>
        <location filename="../ADM_commonUI/DIA_plugins.cpp" line="-32"/>
        <source>Audio Plugins</source>
        <translation>Плагины аудио</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Video Encoder Plugins</source>
        <translation>Плагины видеокодеков</translation>
    </message>
    <message>
        <location line="+30"/>
        <source>Video Encoder</source>
        <translation>Видеокодек</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Video Decoder Plugins</source>
        <translation>Плагины декодеров видео</translation>
    </message>
    <message>
        <location line="+30"/>
        <source>Video Decoder</source>
        <translation>Декодер видео</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Audio Device Plugins</source>
        <translation>Плагины аудиоустройств</translation>
    </message>
    <message>
        <location line="+29"/>
        <source>Audio Device</source>
        <translation>Аудиоустройство</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Audio Encoder Plugins</source>
        <translation>Плагины аудиокодеков</translation>
    </message>
    <message>
        <location line="+29"/>
        <source>Audio Encoders</source>
        <translation>Аудиокодеки</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Demuxer Plugins</source>
        <translation>Плагины демультиплексоров</translation>
    </message>
    <message>
        <location line="+29"/>
        <source>Demuxers</source>
        <translation>Демультиплексоры</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Muxer Plugins</source>
        <translation>Плагины мультиплексоров</translation>
    </message>
    <message>
        <location line="+29"/>
        <source>Muxers</source>
        <translation>Мультиплексоры</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Plugins Info</source>
        <translation>Информация о плагинах</translation>
    </message>
    <message>
        <location filename="../ADM_commonUI/DIA_postproc.cpp" line="+18"/>
        <source>_Deringing</source>
        <translation>_Дерингинг</translation>
    </message>
    <message>
        <location filename="../ADM_commonUI/DIA_prefs.cpp" line="-48"/>
        <source>Decode video using VDPAU (NVIDIA)</source>
        <translation>Декодировать видео с помощью VDPAU (NVIDIA)</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Decode video using LIBVA (INTEL)</source>
        <translation>Декодировать видео с помощью LIBVA (INTEL)</translation>
    </message>
    <message>
        <location line="-6"/>
        <source>Decode video using VideoToolbox (macOS)</source>
        <translation>Декодировать видео с помощью VideoToolbox (macOS)</translation>
    </message>
    <message>
        <location line="-41"/>
        <source>Enable OpenGL support</source>
        <translation>Включить поддержку OpenGL</translation>
    </message>
    <message>
        <location line="+55"/>
        <source>If you use Hw decoding, it is better to use the matching display driver</source>
        <translation>При включении аппаратного ускорения лучше использовать соответствующий вывод видео</translation>
    </message>
    <message>
        <location line="-406"/>
        <source>_Check for new release</source>
        <translation>_Проверять обновления</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>SIMD</source>
        <translation>SIMD</translation>
    </message>
    <message>
        <location line="+138"/>
        <source>Caching of decoded pictures</source>
        <translation>Кэширование декодированных кадров</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Cache size:</source>
        <translation>Разм_ер кэша:</translation>
    </message>
    <message>
        <source>VDPAU (best)</source>
        <translation type="vanished">VDPAU (лучший)</translation>
    </message>
    <message>
        <source>OpenGL (best)</source>
        <translation type="vanished">OpenGL (лучший)</translation>
    </message>
    <message>
        <source>LIBVA (best)</source>
        <translation type="vanished">LIBVA (лучший)</translation>
    </message>
    <message>
        <location line="+52"/>
        <location line="+4"/>
        <source>Sdl driver</source>
        <translation>Драйвер SDL</translation>
    </message>
    <message>
        <location line="+10"/>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="+217"/>
        <source>PCM</source>
        <translation>PCM</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Pro Logic</source>
        <translation>Pro Logic</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Pro Logic II</source>
        <translation>Pro Logic II</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>_AudioDevice</source>
        <translation>_Аудиоустройство</translation>
    </message>
    <message>
        <location line="+74"/>
        <source>De_ringing</source>
        <translation>_Сглаживать высокочастотные искажения (дерингинг)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Strength:</source>
        <translation>_Уровень:</translation>
    </message>
    <message>
        <location line="-64"/>
        <source>System language</source>
        <translation>Системный</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>_Language</source>
        <translation>_Язык</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Import</source>
        <translation>Импорт</translation>
    </message>
    <message>
        <location line="+60"/>
        <source>Post-Processing</source>
        <translation>Постобработка</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>_Limit Refresh Rate</source>
        <translation>_Ограничение частоты обновления</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Refresh Rate Cap (ms)</source>
        <translation>Период обновления (мс)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Enable OpenGL display in filter preview dialogs</source>
        <translation>Включить вывод через OpenGL в окне предпросмотра фильтров</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>OpenGL video display and filters require OpenGL to be enabled and working at application startup to be available</source>
        <translation>Вывод видео через OpenGL и работа его фильтров требуют, чтобы OpenGL был включён и работал при запуске приложения</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>GUI Rendering Options</source>
        <translation>Отрисовка графической оболочки</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Display</source>
        <translation>Вывод</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Decode video using NVDEC (NVIDIA)</source>
        <translation>Декодировать видео с помощью NVDEC (NVIDIA)</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>HW Accel</source>
        <translation>Апп. ускорение</translation>
    </message>
    <message>
        <location line="-305"/>
        <source>_Always ask which port to use</source>
        <translation>_Всегда выбирать порт</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Default port to use</source>
        <translation>Порт по умолчанию</translation>
    </message>
    <message>
        <location filename="../ADM_commonUI/myOwnMenu.h" line="-109"/>
        <source>Open</source>
        <translation>Открыть</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Append</source>
        <translation>Присоединить</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Save</source>
        <translation>Сохранить</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Queue</source>
        <translation>В очередь</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Save as Image</source>
        <translation>Сохранить в изображение</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Save as BMP</source>
        <translation>Сохранить как BMP</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Save as PNG</source>
        <translation>Сохранить как PNG</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Save as JPEG</source>
        <translation>Сохранить как JPEG</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Save Selection as JPEG</source>
        <translation>Сохранить выборку в последовательность JPEG</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Close</source>
        <translation>&amp;Закрыть файл</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Information</source>
        <translation>Сво&amp;йства</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Quit</source>
        <translation>Выход</translation>
    </message>
    <message>
        <location line="+6"/>
        <location line="+3"/>
        <source>Clear recent items</source>
        <translation>Очистить список</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Undo</source>
        <translation>Отменить</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Redo</source>
        <translation>Повторить</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reset Edit</source>
        <translation>Сбросить изменения</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Cut</source>
        <translation>Вырезать</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Paste</source>
        <translation>Вставить</translation>
    </message>
    <message>
        <location line="+2"/>
        <location line="+2"/>
        <source>Delete</source>
        <translation>Удалить</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Reset Marker A</source>
        <translation>Сбросить метку A</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reset Marker B</source>
        <translation>Сбросить метку B</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reset Markers</source>
        <translation>Сбросить метки выборки</translation>
    </message>
    <message>
        <location line="+5"/>
        <location line="+3"/>
        <source>Save current settings as default</source>
        <translation>Сохранить текущие настройки как стандартные</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Load saved settings</source>
        <translation>Загрузить сохранённые настройки</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Decoder Option</source>
        <translation>Параметр декодера</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>PostProcessing</source>
        <translation>Постобработка</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>HDR tone mapping</source>
        <translation>Тональная компрессия HDR</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Add partialized filter</source>
        <translation>Добавить частичный фильтр</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Play filtered</source>
        <translation>Воспроизвести с фильтром</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Select Track</source>
        <translation>Выбрать дорожку</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Save audio</source>
        <translation>Сохранить аудио</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Build Option</source>
        <translation>Параметры сборки</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Plugins</source>
        <translation>Плагины</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>&amp;Advanced</source>
        <translation>&amp;Дополнительно</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Open Application &amp;Log</source>
        <translation>&amp;Открыть журнал приложения</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Open Application Data &amp;Folder</source>
        <translation>О&amp;ткрыть папку с данными приложения</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>About</source>
        <translation>О программе</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Previous Frame</source>
        <translation>Предыдущий кадр</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Next Frame</source>
        <translation>Следующий кадр</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Previous Cut Point</source>
        <translation>Перейти к предыдущему разрезу</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Next Cut Point</source>
        <translation>Перейти к следующему разрезу</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>First Frame</source>
        <translation>Первый кадр</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Last Frame</source>
        <translation>Последний кадр</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Go To Marker A</source>
        <translation>Перейти к метке A</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Go To Marker B</source>
        <translation>Перейти к метке B</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Go To Time</source>
        <translation>Перейти ко времени</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Backward 1 second</source>
        <translation>Назад на 1 секунду</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Forward 1 second</source>
        <translation>Вперёд на 1 секунду</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Backward 2 seconds</source>
        <translation>Назад на 2 секунды</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Forward 2 seconds</source>
        <translation>Вперёд на 2 секунды</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Backward 4 seconds</source>
        <translation>Назад на 4 секунды</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Forward 4 seconds</source>
        <translation>Вперёд на 4 секунды</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Backward one minute</source>
        <translation>Назад на 1 минуту</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Forward one minute</source>
        <translation>Вперёд на 1 минуту</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Zoom 1:4</source>
        <translation>Масштаб 1:4</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Zoom 1:2</source>
        <translation>Масштаб 1:2</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Zoom 1:1</source>
        <translation>Масштаб 1:1</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Zoom 2:1</source>
        <translation>Масштаб 2:1</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Fit to window</source>
        <translation>Подогнать под размер окна</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/ADM_segment.cpp" line="-50"/>
        <location line="+50"/>
        <source>You cannot remove *all* the video
</source>
        <translation>Нельзя удалить *все* видео
</translation>
    </message>
    <message>
        <location filename="../../common/ADM_editor/src/utils/ADM_edFrameType.cpp" line="+72"/>
        <source>Updating frametype</source>
        <translation>Обновление типа фрейма</translation>
    </message>
    <message>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_libva.cpp" line="+1"/>
        <source>Core has been compiled without LIBVA support, but the application has been compiled with it.
Installation mismatch</source>
        <translation>Ядро было скомпилировано без поддержки LLBVA, но приложение — с его поддержкой.
Ошибка установки</translation>
    </message>
    <message>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_vdpau_utils.cpp" line="+0"/>
        <source>Core has been compiled without VDPAU support, but the application has been compiled with it.
Installation mismatch</source>
        <translation>Ядро было скомпилировано без поддержки VDPAU, но приложение — с его поддержкой.
Ошибка установки</translation>
    </message>
    <message>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_xvba.cpp" line="+0"/>
        <source>Core has been compiled without XVBA support, but the application has been compiled with it.
Installation mismatch</source>
        <translation>Ядро было скомпилировано без поддержки XVBA, но приложение — с его поддержкой.
Ошибка установки</translation>
    </message>
    <message>
        <location filename="../../common/gui_autodrive.cpp" line="-143"/>
        <location filename="../../common/gui_save.cpp" line="-619"/>
        <source>No audio track</source>
        <translation>Нет звуковой дорожки</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>An audio track is necessary to create such file</source>
        <translation>Для создания файла данного типа требуется аудиодорожка</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Cannot select the MPEG-4 SP codec.</source>
        <translation>Невозможно выбрать кодек MPEG-4 SP.</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>No AAC audio encoder plugin found.</source>
        <translation>Не найден плагин аудиокодека AAC.</translation>
    </message>
    <message>
        <location line="+32"/>
        <source>The MP3 codec does not allow disabling reservoir.
Install lame plugin</source>
        <translation>Кодек MP3 не позволяет отключение источника.
Установите плагин LAME</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>You don&apos;t have LAME!.
It is needed to create FLV  video.</source>
        <translation>У вас не установлен плагин LAME!
Он требуется для создания видео FLV.</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Cannot select FLV1  codec.</source>
        <translation>Невозможно выбрать кодек FLV1.</translation>
    </message>
    <message>
        <location line="+27"/>
        <source>Cannot select MPEG-4 SP codec.</source>
        <translation>Невозможно выбрать кодек MPEG-4 SP.</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>You don&apos;t have FAAC!.
It is needed to create PSP compatible video.</source>
        <translation>У вас не установлен плагин FAAC!
Он требуется для создания видео, совместимого с PSP.</translation>
    </message>
    <message>
        <location filename="../../common/gui_main.cpp" line="-1601"/>
        <source>Select script/project to run</source>
        <translation>Выбрать скрипт/проект для запуска</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Select script to run</source>
        <translation>Выбрать скрипт для запуска</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Select script to debug</source>
        <translation>Выбрать скрипт для отладки</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Select script to save</source>
        <translation>Выбрать скрипт для сохранения</translation>
    </message>
    <message>
        <location line="+64"/>
        <source>You are about to clear the list of recent files and projects. This can&apos;t be undone. Proceed?</source>
        <translation>Вы хотите очистить список недавно открытых файлов и проектов. Этот шаг необратим. Продолжить?</translation>
    </message>
    <message>
        <location line="+152"/>
        <location line="+77"/>
        <source>Select Video File...</source>
        <translation>Выбрать файл видео...</translation>
    </message>
    <message>
        <location line="-49"/>
        <source>No engine</source>
        <translation>Нет движка</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>tinyPy script is not enabled in this build</source>
        <translation>Скрипт tinyPy не включён в эту сборку</translation>
    </message>
    <message>
        <location line="+51"/>
        <source>Select Video File to Append...</source>
        <translation>Выбрать файл видео для присоединения...</translation>
    </message>
    <message>
        <location line="+142"/>
        <source>The cut points of the pasted video are not on keyframes.
Video saved in copy mode will be corrupted at these points.
Proceed anyway?</source>
        <translation>Точки разреза вставленного видео находятся не на ключевых кадрах.
Видео, сохранённое в режиме копирования, будет на этих местах повреждено.
Всё равно продолжить?</translation>
    </message>
    <message>
        <location line="+150"/>
        <location line="+24"/>
        <source>Cutting</source>
        <translation>Обрезка</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Error while cutting out.</source>
        <translation>Ошибка обрезки.</translation>
    </message>
    <message>
        <location line="+844"/>
        <location line="+8"/>
        <source>Invalid audio index given</source>
        <translation>Указан неверный индекс аудио</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Cannot use that file as audio track</source>
        <translation>Невозможно использовать файл для аудиодорожки</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Audio file not found in list, even though it should be there. Create a bug report!</source>
        <translation>Файл аудио не найден в списке, хотя он должен был там быть. Создайте отчёт об ошибке!</translation>
    </message>
    <message>
        <location line="+29"/>
        <source>Unable to set the audio language: No video loaded yet!</source>
        <translation>Невозможно установить язык аудио: видео не загружено!</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Setting the language for the given track index is not possible: Video has no audio file!</source>
        <translation>Установка языка указанной дорожки невозможна: в видео нет файла аудио!</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Setting the language for the given track index is not possible: Invalid track index!</source>
        <translation>Установка языка дорожки невозможна: неверный индекс дорожки!</translation>
    </message>
    <message>
        <location line="+147"/>
        <source>AvsProxy</source>
        <translation>AvsProxy</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>avsproxy</source>
        <translation>AvsProxy</translation>
    </message>
    <message>
        <location line="+151"/>
        <source>Oops</source>
        <translation>Предупреждение</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>This function is disabled or no longer valid</source>
        <translation>Функция отключена или более недействительна</translation>
    </message>
    <message>
        <location filename="../../common/gui_play.cpp" line="+475"/>
        <source>Trouble initializing audio device</source>
        <translation>Проблема при инициализации аудиоустройства</translation>
    </message>
    <message>
        <location filename="../../common/gui_save.cpp" line="+11"/>
        <source>Audio encoder index out of bounds</source>
        <translation>Индекс кодека аудио вне пределов</translation>
    </message>
    <message>
        <location line="+46"/>
        <source>No</source>
        <translation>Нет</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>No file loaded</source>
        <translation>Файл не загружен</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Job</source>
        <translation>Задание</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Cannot reach database. Do you have Job control running ?</source>
        <translation>Невозможно подключиться к базе данных. У вас включено управление заданиями?</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Output file</source>
        <translation>Выходной файл</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Job name</source>
        <translation>Название задания</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Queue job to jobList</source>
        <translation>Добавить задание в очередь</translation>
    </message>
    <message>
        <location line="+54"/>
        <source>Select PNG to Save</source>
        <translation>Выберите PNG для сохранения</translation>
    </message>
    <message>
        <location line="+171"/>
        <source>Function not implemented
</source>
        <translation>Функция не реализована</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Cannot create stream</source>
        <translation>Невозможно создать поток</translation>
    </message>
    <message>
        <location line="-33"/>
        <location line="+40"/>
        <source>Saving failed</source>
        <translation>Ошибка при сохранении</translation>
    </message>
    <message>
        <location line="+84"/>
        <source>Jpeg</source>
        <translation>Jpeg</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Failed to save as JPEG</source>
        <translation>Не удалось сохранить в PNG</translation>
    </message>
    <message>
        <location line="+85"/>
        <source>Saving selection as set of JPEG images</source>
        <translation>Сохранение выборки в набор изображений JPEG</translation>
    </message>
    <message>
        <location line="+33"/>
        <source>Warning</source>
        <translation>Предупреждение</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Saving images failed.</source>
        <translation>Ошибка при сохранении изображений.</translation>
    </message>
    <message>
        <location line="+25"/>
        <source>PNG</source>
        <translation>PNG</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Failed to save as PNG</source>
        <translation>Не удалось сохранить в PNG</translation>
    </message>
    <message>
        <location line="+70"/>
        <source>Cannot get tinyPy script engine</source>
        <translation>Невозможно подключить движок скрипта tinyPy</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Output file not specified</source>
        <translation>Выходной файл не указан</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Job script %s already exists. Overwrite?</source>
        <translation>Скрипт задания %s уже существует. Перезаписать?</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Cannot add job %s</source>
        <translation>Невозможно добавить задание %s</translation>
    </message>
    <message>
        <location filename="../../common/gui_savenew.cpp" line="-214"/>
        <source>Reuse previous first pass data ?
Warning, the settings must be close.</source>
        <translation>Использовать данные первого прохода ещё раз?
Предупреждение: настройки должны быть закрыты.</translation>
    </message>
    <message>
        <location line="+185"/>
        <source>Cannot instantiate video chain</source>
        <translation>Невозможно подтвердить цепочку видео</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Cannot create encoder</source>
        <translation>Невозможно создать кодек</translation>
    </message>
    <message>
        <source>Cannot setup codec. Bitrate too low?</source>
        <translation type="obsolete">Невозможно установить кодек. Слишком низкий битрейт?</translation>
    </message>
    <message>
        <location line="+63"/>
        <source>Cannot setup audio encoder, make sure your stream is compatible with audio encoder (number of channels, bitrate, format)</source>
        <translation>Невозможно настроить аудиокодек, убедитесь в совместимости потока с ним (количество каналов, битрейт, формат)</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>The video is in copy mode but the cut points are not on keyframes.
The video will be saved but there will be corruption at cut point(s).
Do you want to continue anyway ?</source>
        <translation>Установлен режим копирования для видео, но точки разреза находятся не на ключевых кадрах. Видео будет сохранено, но на точках разреза будут повреждения.
Всё равно продолжить?</translation>
    </message>
    <message>
        <location line="-265"/>
        <location line="+301"/>
        <location line="+25"/>
        <source>Muxer</source>
        <translation>Мультиплексор</translation>
    </message>
    <message>
        <location line="-337"/>
        <source>Cannot set up encoder for the first pass. The configuration supplied to the encoder may be incompatible or the encoder may depend on features unavailable on this system.</source>
        <translation>Не удаётся настроить кодировщик для 1 прохода. Возможно, что настройки, переданные кодировщику, несовместимы, или кодировщик нуждается в функциях, не предоставляемых данной системой.</translation>
    </message>
    <message>
        <location line="+11"/>
        <location line="+301"/>
        <source>Cannot instantiate muxer</source>
        <translation>Не удаётся создать экземпляр мультиплексора</translation>
    </message>
    <message>
        <location line="-110"/>
        <source>Cannot set up encoder. The configuration supplied to the encoder may be incompatible or the encoder may depend on features unavailable on this system.</source>
        <translation>Не удаётся настроить кодировщик. Возможно, что настройки, переданные кодировщику, несовместимы, или кодировщик нуждается в функциях, не предоставляемых данной системой.</translation>
    </message>
    <message>
        <location line="+79"/>
        <source>This video uses non-IDR recovery points instead of IDR as keyframes. Picture reordering information in the video stream is not reset at non-IDR frames. The choice of cut points may result in playback interruption due to reversed display order of frames if saved in copy mode.
Do you want to continue anyway?</source>
        <translation>Это видео использует кадры прямого доступа без мгновенного обновления декодирования (non-IDR). Счётчик очерёдности показа изображений (POC) на таких ключевых кадрах не сбрасывается. Выбранные точки разреза при сохранении видео в режиме копирования могут привести к задержке воспроизведения из-за нарушенного порядка показа изображений.
Всё равно продолжить?</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Codec or codec settings across a cut point do not match. Playback of the video saved in copy mode may stop at this point.
Do you want to continue anyway?</source>
        <translation>Кодек или параметры кодирования на точках разреза не совпадают. Воспроизведение видео, сохранённого в режиме копирования, может на этих точках обрываться.
Всё равно продолжить?</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Cut points could not be checked. This indicates an issue with a source video, the state of editing or a bug in the program. Please check the application log file or console output for details.
Try anyway?</source>
        <translation>Не удалось проверить точки разреза. Это указывает на проблему либо с исходным видео, либо с шагами редактирования, либо является проявлением ошибки в программе. За деталями обратитесь, пожалуйста, к журнальному файлу приложения или к консольным сообщениям.
Всё равно продолжить?</translation>
    </message>
    <message>
        <location line="+43"/>
        <source>Cannot open </source>
        <translation>Невозможно открыть </translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/T_threadCount.cpp" line="-2"/>
        <location filename="../ADM_commonUI/DIA_HDRConfig.cpp" line="+27"/>
        <location filename="../ADM_commonUI/DIA_prefs.cpp" line="+185"/>
        <source>Disabled</source>
        <translation>Отключено</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Auto-detect</source>
        <translation>Автоматически</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="-23"/>
        <source>_Interlaced</source>
        <translation>_Режим чересстрочности</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ca_rtoon mode</source>
        <translation>Р_ежим анимации</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Greyscale</source>
        <translation>_Оттенки серого</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Turbo mode</source>
        <translation>_Турборежим</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>C_hroma optimizer</source>
        <translation>_Оптимизатор цвета</translation>
    </message>
    <message>
        <location filename="../ADM_commonUI/DIA_audioFilter.cpp" line="+4"/>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+2"/>
        <source>Main</source>
        <translation>Основное</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/DIA_xvid4.cpp" line="+4"/>
        <source>Very Low</source>
        <translation>Очень низкий</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Very High</source>
        <translation>Очень высокий</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ultra High</source>
        <translation>Ультравысокий</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Motion Search Precision</source>
        <translation>Точность поиска движений</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Off</source>
        <translation>Отключено</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Mode Decision</source>
        <translation>Точность режима</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>VHQ Mode</source>
        <translation>Режим VHQ</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Max B Frames</source>
        <translation>Максимум B-кадров</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Quarter Pixel</source>
        <translation>Четверть пикселя</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>GMC</source>
        <translation>GMC</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>BVHQ</source>
        <translation>BVHQ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Advanced Simple Profile</source>
        <translation>Расширенный простой профиль</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>4MV</source>
        <translation>4MV</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Chroma ME</source>
        <translation>Chroma ME</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>HQ AC</source>
        <translation>HQ AC</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>More Search</source>
        <translation>Дальнейший поиск</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Min Gop Size</source>
        <translation>Мин. размер группы кадров</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Max Gop Size</source>
        <translation>Макс. размер группы кадров</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>GOP Size</source>
        <translation>Размер группы кадров</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Motion</source>
        <translation>Движение</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>H263</source>
        <translation>H263</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Mpeg</source>
        <translation>Mpeg</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Quantization Matrix</source>
        <translation>Матрица квантования</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Trellis Quantization</source>
        <translation>Треллис-квантование</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Quantization</source>
        <translation>Квантование</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Two Pass Tuning</source>
        <translation>Настройка двух проходов</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Key Frame Boost(%)</source>
        <translation>Ускорение ключевых кадров (%)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>I-frames closer than...</source>
        <translation>I-кадры ближе, чем...</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>.. are reduced by(%)</source>
        <translation>... уменьшены на (%)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Max Overflow Improvement(%)</source>
        <translation>Максимальное увеличение переполнения (%)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Max Overglow Degradation(%)</source>
        <translation>Максимальное уменьшение переполнения (%)</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Curve Compression</source>
        <translation>Сжатие кривых</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>High Bitrate Scenes (%)</source>
        <translation>Сцены с высоким битрейтом (%)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Low Bitrate Scenes (%)</source>
        <translation>Сцены с низким битрейтом (%)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Overflow Control Strength</source>
        <translation>Степень управления переполнением</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Two Pass</source>
        <translation>2 прохода</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Xvid4 Configuration</source>
        <translation>Настройки Xvid4</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_core/src/ADM_prettyPrint.cpp" line="+23"/>
        <source>%d minute(s)</source>
        <translation>%d мин</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>%d hour(s)</source>
        <translation>%d ч</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Less than a minute</source>
        <translation>Меньше минуты</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>A few seconds</source>
        <translation>Несколько секунд</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStream.cpp" line="-1"/>
        <source>DTS</source>
        <translation>DTS</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>MP2</source>
        <translation>MP2</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>MP3</source>
        <translation>MP3</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>WMAPRO</source>
        <translation>WMAPRO</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>WMA Lossless</source>
        <translation>WMA Lossless</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>WMA</source>
        <translation>WMA</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>LPCM</source>
        <translation>LPCM</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>AC3</source>
        <translation>AC3</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>OPUS</source>
        <translation>OPUS</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>FLAC</source>
        <translation>FLAC</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>E-AC3</source>
        <translation>E-AC3</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Float PCM</source>
        <translation>Float PCM</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ogg Vorbis</source>
        <translation>Ogg Vorbis</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>MP4</source>
        <translation>MP4</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>AAC</source>
        <translation>AAC</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>QDM2</source>
        <translation>QDM2</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>AMR-NB</source>
        <translation>AMR-NB</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>MSADPCM</source>
        <translation>MSADPCM</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>A-law</source>
        <translation>A-закон</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>ULAW</source>
        <translation>ULAW</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>IMA ADPCM</source>
        <translation>IMA ADPCM</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>8-bit PCM</source>
        <translation>8-битный PCM</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>TrueHD</source>
        <translation>TrueHD</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Unknown codec</source>
        <translation>Неизвестный кодек</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreAudio/src/ADM_audioStreamMP3.cpp" line="+199"/>
        <source>Building time map</source>
        <translation>Создание временной карты</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreImage/src/ADM_imageSave.cpp" line="+88"/>
        <source>Cannot allocate enough memory</source>
        <translation>Ошибка выделения памяти</translation>
    </message>
    <message>
        <location line="+33"/>
        <source>Cannot create output file</source>
        <translation>Невозможно создать выходной файл</translation>
    </message>
    <message>
        <location line="+246"/>
        <source>Memory error</source>
        <translation>Ошибка выделения памяти</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreMuxer/src/ADM_coreMuxerFfmpeg.cpp" line="+470"/>
        <source>Saving</source>
        <translation>Сохранение</translation>
    </message>
    <message>
        <location line="+196"/>
        <source>The saved video is incomplete. The error occured at %s (%d%). This may happen as result of invalid time stamps in the video.</source>
        <translation>Сохранённое видео является неполным. Ошибка возникла на %s (%d%). Это может происходить в результате недопустимых отметок времени в видео.</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Too short</source>
        <translation>Слишком коротко</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_iso639.cpp" line="+17"/>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/avidemutils.cpp" line="+384"/>
        <source>Unknown</source>
        <translation>Неизвестно</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/ADM_quota.cpp" line="-4"/>
        <source>can&apos;t open &quot;%s&quot;: %s
%s
</source>
        <translation>невозможно открыть «%s»: %s
%s
</translation>
    </message>
    <message>
        <location line="+2"/>
        <location line="+90"/>
        <source>filesystem full</source>
        <translation>файловая система переполнена</translation>
    </message>
    <message>
        <location line="-90"/>
        <location line="+90"/>
        <source>quota exceeded</source>
        <translation>превышена квота</translation>
    </message>
    <message>
        <location line="-89"/>
        <location line="+90"/>
        <source>Please free up some space and press RETRY to try again.</source>
        <translation>Пожалуйста, освободите место и нажмите «Повторить», чтобы попробовать заново.</translation>
    </message>
    <message>
        <location line="-79"/>
        <source>can&apos;t open &quot;%s&quot;: %u (%s)
</source>
        <translation>невозможно открыть «%s»: %u (%s)
</translation>
    </message>
    <message>
        <location line="+76"/>
        <source>can&apos;t write to file &quot;%s&quot;: %s
%s
</source>
        <translation>невозможно записать в файл «%s»: %s
%s
</translation>
    </message>
    <message>
        <location line="+1"/>
        <location line="+11"/>
        <source>__unknown__</source>
        <translation>__неизвестно__</translation>
    </message>
    <message>
        <location line="-8"/>
        <source>Ignore</source>
        <translation>Игнорировать</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Retry</source>
        <translation>Повторить</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>can&apos;t write to file &quot;%s&quot;: %u (%s)
</source>
        <translation>невозможно записать в файл «%s»: %u (%s)
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUtils/src/avidemutils.cpp" line="-7"/>
        <source>NTSC 4:3</source>
        <translation>NTSC 4:3</translation>
    </message>
    <message>
        <location line="+1"/>
        <location line="+1"/>
        <source>NTSC 16:9</source>
        <translation>NTSC 16:9</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>PAL 4:3</source>
        <translation>PAL 4:3</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>PAL 16:9</source>
        <translation>PAL 16:9</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>1:1</source>
        <translation>1:1</translation>
    </message>
    <message>
        <location filename="../../../avidemux_core/ADM_coreVideoCodec/src/ADM_ffmp43.cpp" line="+389"/>
        <location line="+45"/>
        <source>Codec</source>
        <translation>Кодек</translation>
    </message>
    <message>
        <location line="-44"/>
        <source>Internal error finding decoder for %s</source>
        <translation>Внутренняя ошибка поиска кодека для %s</translation>
    </message>
    <message>
        <location line="+45"/>
        <source>Internal error opening libavcodec %s decoder</source>
        <translation>Внутренняя ошибка открытия декодера libavcodec %s</translation>
    </message>
    <message>
        <source>Internal error finding codec 0x%x</source>
        <translation type="vanished">Внутренняя ошибка поиска кодека 0x%x</translation>
    </message>
    <message>
        <source>Internal error opening 0x%x</source>
        <translation type="vanished">Внутренняя ошибка открытия 0x%x</translation>
    </message>
    <message>
        <location filename="../../common/ADM_videoCodec/src/ADM_ffmpeg_dxva2.cpp" line="+1"/>
        <source>Core has been compiled without DXVA2 support, but the application has been compiled with it.
Installation mismatch</source>
        <translation>Ядро было скомпилировано без поддержки DXVA2, а приложение — с его поддержкой.
Несоответствие установки</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glShaderLoader/shader.cpp" line="+246"/>
        <source>Cannot compile shader</source>
        <translation>Невозможно скомпилировать шейдер</translation>
    </message>
    <message>
        <location filename="../../common/ADM_toolkit/automation.cpp" line="+235"/>
        <source>Permission Error</source>
        <translation>Ошибка прав доступа</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Cannot open script &quot;%s&quot;.</source>
        <translation>Невозможно открыть скрипт «%s».</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>File Error</source>
        <translation>Ошибка файла</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Script &quot;%s&quot; does not exist.</source>
        <translation>Скрипт «%s» не существует.</translation>
    </message>
    <message>
        <location filename="../ADM_commonUI/DIA_HDRConfig.cpp" line="-7"/>
        <source>Changing the options above will results the editor jumping to the nearest prior key frame.</source>
        <translation>Изменение параметров выше приведёт к тому, что редактор перейдёт к ближайшему предыдущему ключевому кадру.</translation>
    </message>
    <message>
        <location line="+8"/>
        <location filename="../ADM_commonUI/DIA_prefs.cpp" line="+1"/>
        <source>Fast YUV</source>
        <translation>Быстрый YUV</translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../ADM_commonUI/DIA_prefs.cpp" line="+1"/>
        <source>RGB clipping</source>
        <translation>Отсечение RGB</translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../ADM_commonUI/DIA_prefs.cpp" line="+1"/>
        <source>RGB soft limit</source>
        <translation>Мягкий предел RGB</translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../ADM_commonUI/DIA_prefs.cpp" line="+1"/>
        <source>RGB Reinhard</source>
        <translation>Рейнхард RGB</translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../ADM_commonUI/DIA_prefs.cpp" line="+1"/>
        <source>RGB Hable</source>
        <translation>Хейбл RGB</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>_Tone mapping:</source>
        <translation>_Тональная компрессия:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Saturation:</source>
        <translation>_Насыщенность:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Boost (level multiplier):</source>
        <translation>_Увеличение (множитель уровня):</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Adaptive RGB tonemappers</source>
        <translation>_Адаптивные тональные преобразователи RGB</translation>
    </message>
    <message>
        <location line="+2"/>
        <location filename="../ADM_commonUI/DIA_prefs.cpp" line="+9"/>
        <source>Clipping</source>
        <translation>Отсечение</translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../ADM_commonUI/DIA_prefs.cpp" line="+1"/>
        <source>Compression</source>
        <translation>Сжатие</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_RGB out of gamut handling:</source>
        <translation>_Обработка RGB вне гаммы:</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/T_floatResettable.cpp" line="+131"/>
        <source>Reset</source>
        <translation>Сброс</translation>
    </message>
</context>
<context>
    <name>admIvtc</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/admIvtc/ADM_admIvtc.cpp" line="+43"/>
        <source>ADM ivtc.</source>
        <translation>Обратный телесин ADM.</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>All in one ivtc.</source>
        <translation>Всё в одном обратном телесине.</translation>
    </message>
</context>
<context>
    <name>aften</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/aften/audioencoder_aften.cpp" line="+240"/>
        <source>_Bitrate:</source>
        <translation>_Битрейт:</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Aften Configuration</source>
        <translation>Настройки Aften</translation>
    </message>
</context>
<context>
    <name>aiEnhance</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/aiEnhance/ADM_vidAiEnhance.cpp" line="+38"/>
        <source>A.I. Enhance (sw)</source>
        <translation>A.I. Enhance (программно)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Neural network upscalers for low resolution videos.</source>
        <translation>Увеличение видео низкого разрешения с помощью нейросетей.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/aiEnhance/qt4/Q_aiEnhance.cpp" line="+64"/>
        <source>Peek Original</source>
        <translation>Просмотр оригинала</translation>
    </message>
    <message>
        <location line="+17"/>
        <location line="+54"/>
        <source>Preferences</source>
        <translation>Настройки</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Defaults for new filter instances</source>
        <translation>Стандартные значения новых экземпляров фильтра</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Preview scale:</source>
        <translation>Масштаб предпросмотра:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>x2</source>
        <translation>×2</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>x3</source>
        <translation>×3</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>x4</source>
        <translation>×4</translation>
    </message>
    <message>
        <location line="+83"/>
        <source>Warning: the scale of the preview does not match the scale of the selected filter</source>
        <translation>Предупреждение: масштаб предпросмотра не соответствует масштабу выбранного фильтра</translation>
    </message>
</context>
<context>
    <name>aiEnhanceDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/aiEnhance/qt4/aiEnhance.ui" line="+14"/>
        <source>A.I. Enhance</source>
        <translation>A.I. Enhance</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Method:</source>
        <translation>Метод:</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>fast-FSRCNN x2 upscale</source>
        <translation>быстрое двукратное увеличение FSRCNN</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>fast-FSRCNN x2 upscale with denoising</source>
        <translation>быстрое двукратное увеличение FSRCNN с шумоподавлением</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>FSRCNN x2 upscale for anime</source>
        <translation>двукратное увеличение FSRCNN для аниме</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>FSRCNN x2 upscale with denoising</source>
        <translation>двукратное увеличение FSRCNN с шумоподавлением</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>FSRCNN x2 upscale mild</source>
        <translation>мягкое двукратное увеличение FSRCNN</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>FSRCNN x2 upscale</source>
        <translation>двукратное увеличение FSRCNN</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>FSRCNN x3 upscale</source>
        <translation>троекратное увеличение FSRCNN</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>FSRCNN x4 upscale</source>
        <translation>четырёхкратное увеличение FSRCNN</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>PL3NET x2 upscale</source>
        <translation>двукратное увеличение PL3NET</translation>
    </message>
</context>
<context>
    <name>analyzer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/analyzer/ADM_vidAnalyzer.cpp" line="+32"/>
        <source>Analyzer</source>
        <translation>Анализатор</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Null filter. Vectorscope, Waveform scopes and Histograms in Preview.</source>
        <translation>Нулевой фильтр. Вектороскоп, осциллоскопы и гистограммы в предварительном просмотре.</translation>
    </message>
</context>
<context>
    <name>analyzerDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/analyzer/qt4/analyzer.ui" line="+14"/>
        <source>Analyzer</source>
        <translation>Анализатор</translation>
    </message>
</context>
<context>
    <name>aomencoder</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/av1aom/ADM_av1AomEncDialog.cpp" line="+29"/>
        <source>Good quality</source>
        <translation>Хорошее качество</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Realtime</source>
        <translation>Режим реального времени</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Usage</source>
        <translation>Использование</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Speed</source>
        <translation>Скорость</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Lower values favor quality over speed.</source>
        <translation>При меньших значениях предпочтение отдаётся качеству, а не скорости.</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Tiling</source>
        <translation>Плиточное замощение</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Tiling benefits multi-threading of encoding and decoding.</source>
        <translation>Плиточное замощение обеспечивает многопоточность кодирования и декодирования.</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Threads</source>
        <translation>Потоки</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Maximum number of threads allowed, the encoder may use less at its discretion.</source>
        <translation>Предельно допустимое число потоков, кодек может использовать меньше по своему усмотрению.</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Use at most as many threads as CPU cores</source>
        <translation>Ограничить число потоков количеством ядер процессора</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>GOP Size</source>
        <translation>Размер группы кадров</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Treat input as having full color range</source>
        <translation>Считать, что вход содержит полный цветовой диапазон</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Encoding Mode</source>
        <translation>Режим кодирования</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Speed vs Quality</source>
        <translation>Скорость и качество</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Keyframes</source>
        <translation>Ключевые кадры</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Miscellaneous</source>
        <translation>Прочее</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>libaom AV1 Encoder Configuration</source>
        <translation>Настройки кодировщика libaom AV1</translation>
    </message>
</context>
<context>
    <name>artCartoon</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artCartoon/ADM_vidArtCartoon.cpp" line="+44"/>
        <source>Cartoon</source>
        <translation>Мультяшный фильтр</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ported from frei0r.</source>
        <translation>Портирован из frei0r.</translation>
    </message>
</context>
<context>
    <name>artCartoonDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artCartoon/qt4/artCartoon.ui" line="+14"/>
        <source>Cartoon</source>
        <translation>Мультяшный фильтр</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Threshold</source>
        <translation>Порог</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Scatter</source>
        <translation>Разброс</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Color level</source>
        <translation>Уровень цвета</translation>
    </message>
</context>
<context>
    <name>artCharcoal</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artCharcoal/ADM_vidArtCharcoal.cpp" line="+41"/>
        <source>Charcoal / Chalkboard</source>
        <translation>Рисунок углём / мелом</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ported from MLT.</source>
        <translation>Портирован из MLT.</translation>
    </message>
</context>
<context>
    <name>artCharcoalDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artCharcoal/qt4/artCharcoal.ui" line="+14"/>
        <source>Charcoal / Chalkboard</source>
        <translation>Рисунок углём / мелом</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Intensity</source>
        <translation>Интенсивность</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Color</source>
        <translation>Цвет</translation>
    </message>
    <message>
        <location line="+29"/>
        <source>Vertical scatter</source>
        <translation>Разброс по вертикали</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Horizontal scatter</source>
        <translation>Разброс по горизонтали</translation>
    </message>
    <message>
        <location line="+66"/>
        <source>Chalkboard</source>
        <translation>Мел по чёрной доске</translation>
    </message>
</context>
<context>
    <name>artChromaHold</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaHold/ADM_vidArtChromaHold.cpp" line="+41"/>
        <source>Chroma Hold</source>
        <translation>Удержание цветности</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Monochrome effect with kept color(s).</source>
        <translation>Монохромный эффект с сохранением цветов.</translation>
    </message>
</context>
<context>
    <name>artChromaHoldDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaHold/qt4/artChromaHold.ui" line="+14"/>
        <source>Chroma Hold</source>
        <translation>Удержание цветности</translation>
    </message>
    <message>
        <location line="+97"/>
        <source>Tertiary</source>
        <translation>Третичный</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Secondary</source>
        <translation>Вторичный</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Primary</source>
        <translation>Первичный</translation>
    </message>
    <message>
        <location line="+108"/>
        <source>Distance</source>
        <translation>Расстояние</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Cutoff slope</source>
        <translation>Наклон среза</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Pick Chroma</source>
        <translation>Выбрать цветность</translation>
    </message>
</context>
<context>
    <name>artChromaKey</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaKey/ADM_vidArtChromaKey.cpp" line="+42"/>
        <source>Chroma Key</source>
        <translation>Хромакей</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Replace &quot;green screen&quot; with an image.</source>
        <translation>Замена «зелёного экрана» изображением.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaKey/qt4/Q_artChromaKey.cpp" line="+286"/>
        <source>Select Background Image</source>
        <translation>Выбрать фоновое изображение</translation>
    </message>
</context>
<context>
    <name>artChromaKeyDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artChromaKey/qt4/artChromaKey.ui" line="+14"/>
        <source>Chroma Key</source>
        <translation>Хромакей</translation>
    </message>
    <message>
        <location line="+49"/>
        <source>Primary</source>
        <translation>Первичный</translation>
    </message>
    <message>
        <location line="+54"/>
        <source>Tertiary</source>
        <translation>Третичный</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Secondary</source>
        <translation>Вторичный</translation>
    </message>
    <message>
        <location line="+83"/>
        <source>Cutoff slope</source>
        <translation>Наклон среза</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Pick Chroma</source>
        <translation>Выбрать цветность</translation>
    </message>
    <message>
        <location line="+54"/>
        <source>Select image</source>
        <translation>Выбрать изображение</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Show calibration background</source>
        <translation>Показать фон калибровки</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>No spill control</source>
        <translation>Контроль утечки</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Weighted alpha</source>
        <translation>Взвешенная альфа</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>AVG alpha</source>
        <translation>Средняя альфа</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>RMS alpha</source>
        <translation>Среднеквадратичная альфа</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>MIN alpha</source>
        <translation>Минимальная альфа</translation>
    </message>
    <message>
        <location line="+57"/>
        <source>Distance</source>
        <translation>Расстояние</translation>
    </message>
</context>
<context>
    <name>artColorEffect</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artColorEffect/ADM_vidArtColorEffect.cpp" line="+33"/>
        <source>Color Effect</source>
        <translation>Цветовой эффект</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ported from frei0r.</source>
        <translation>Портирован из frei0r.</translation>
    </message>
</context>
<context>
    <name>artColorEffectDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artColorEffect/qt4/artColorEffect.ui" line="+14"/>
        <source>Color Effect</source>
        <translation>Цветовой эффект</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Effect</source>
        <translation>Эффект</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Sepia</source>
        <translation>Сепия</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Vivid</source>
        <translation>Красочный</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>RGB</source>
        <translation>RGB</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Heat</source>
        <translation>Жаркий</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Radium</source>
        <translation>Радиевый</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Red-green</source>
        <translation>Красно-зелёный</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Monochrome</source>
        <translation>Чёрно-белый</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Old photo</source>
        <translation>Старая фотография</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Night vision</source>
        <translation>Система ночного видения</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>X-ray</source>
        <translation>Рентген</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Shades</source>
        <translation>Оттенки</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>XPRO</source>
        <translation>XPRO</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Yellow-blue</source>
        <translation>Жёлто-синий</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Yellow-bluish</source>
        <translation>Жёлто-голубоватый</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Chrome</source>
        <translation>Хромовый</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Esses</source>
        <translation>Esses</translation>
    </message>
</context>
<context>
    <name>artDynThreshold</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artDynThreshold/ADM_vidArtDynThreshold.cpp" line="+41"/>
        <source>Dynamic Threshold</source>
        <translation>Динамический порог</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Adaptive luma thresholding </source>
        <translation>Адаптивное пороговое значение яркости </translation>
    </message>
</context>
<context>
    <name>artDynThresholdDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artDynThreshold/qt4/artDynThreshold.ui" line="+14"/>
        <source>Dynamic Threshold</source>
        <translation>Динамический порог</translation>
    </message>
    <message>
        <location line="+57"/>
        <source>Levels</source>
        <translation>Уровни</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Offset</source>
        <translation>Смещение</translation>
    </message>
</context>
<context>
    <name>artGrid</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artGrid/ADM_vidArtGrid.cpp" line="+35"/>
        <source>Grid</source>
        <translation>Сетка</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Video wall effect.</source>
        <translation>Эффект видеостены.</translation>
    </message>
</context>
<context>
    <name>artGridDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artGrid/qt4/artGrid.ui" line="+14"/>
        <source>Grid</source>
        <translation>Сетка</translation>
    </message>
    <message>
        <location line="+57"/>
        <source>Grid size</source>
        <translation>Размер сетки</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Roll previous frames</source>
        <translation>Прокатить предыдущие кадры</translation>
    </message>
</context>
<context>
    <name>artMirror</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artMirror/ADM_vidArtMirror.cpp" line="+41"/>
        <source>Mirror</source>
        <translation>Отражение</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Mirror horizontally or vertically.</source>
        <translation>Горизонтальное или вертикальное отражение.</translation>
    </message>
</context>
<context>
    <name>artMirrorDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artMirror/qt4/artMirror.ui" line="+14"/>
        <source>Mirror</source>
        <translation>Отражение</translation>
    </message>
    <message>
        <location line="+87"/>
        <source>Displacement</source>
        <translation>Смещение</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Horizontal - keep left</source>
        <translation>Горизонтальное - сохранить левое</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Horizontal - keep right</source>
        <translation>Горизонтальное - сохранить правое</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Vertical - keep top</source>
        <translation>Вертикальное - сохранить верхнее</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Vertical - keep bottom</source>
        <translation>Вертикальное - сохранить нижнее</translation>
    </message>
</context>
<context>
    <name>artPixelize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artPixelize/ADM_vidArtPixelize.cpp" line="+59"/>
        <source>Pixelize</source>
        <translation>Пикселизация</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Pixelize image.</source>
        <translation>Пикселизировать изображение.</translation>
    </message>
</context>
<context>
    <name>artPixelizeDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artPixelize/qt4/artPixelize.ui" line="+14"/>
        <source>Pixelize</source>
        <translation>Пикселизация</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Pixel size</source>
        <translation>Размер блока</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>x</source>
        <translation>на</translation>
    </message>
</context>
<context>
    <name>artPosterize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artPosterize/ADM_vidArtPosterize.cpp" line="+44"/>
        <source>Posterize</source>
        <translation>Постеризация</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ported from frei0r.</source>
        <translation>Портирован из frei0r.</translation>
    </message>
</context>
<context>
    <name>artPosterizeDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artPosterize/qt4/artPosterize.ui" line="+14"/>
        <source>Posterize</source>
        <translation>Постеризация</translation>
    </message>
    <message>
        <location line="+62"/>
        <source>Levels</source>
        <translation>Уровни</translation>
    </message>
</context>
<context>
    <name>artVHS</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVHS/ADM_vidArtVHS.cpp" line="+39"/>
        <source>VHS</source>
        <translation>VHS</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>VHS effect. Most authentic at lower resolutions.</source>
        <translation>Эффект видео системы VHS. Наиболее убедителен при низком разрешении.</translation>
    </message>
</context>
<context>
    <name>artVHSDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVHS/qt4/artVHS.ui" line="+14"/>
        <source>VHS</source>
        <translation>VHS</translation>
    </message>
    <message>
        <location line="+132"/>
        <source>Luma bandwidth</source>
        <translation>Полоса сигнала яркости (luma)</translation>
    </message>
    <message>
        <location line="-90"/>
        <source>Chroma bandwidth</source>
        <translation>Полоса сигнала цветности (chroma)</translation>
    </message>
    <message>
        <location line="+83"/>
        <source>Sync error</source>
        <translation>Ошибка синхронизации</translation>
    </message>
    <message>
        <location line="-76"/>
        <source>Use zero delay filter for chroma</source>
        <translation>Двойная фильтрация цветности</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Use zero delay filter for luma</source>
        <translation>Двойная фильтрация яркости</translation>
    </message>
    <message>
        <location line="+70"/>
        <source>Sync error filter</source>
        <translation>Фильтр ошибки синхронизации</translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Noise</source>
        <translation>Шум</translation>
    </message>
</context>
<context>
    <name>artVignette</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVignette/ADM_vidArtVignette.cpp" line="+43"/>
        <source>Vignette</source>
        <translation>Виньетка</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Lens vignetting effect, ported from frei0r.</source>
        <translation>Эффект виньетирования объектива, портирован из frei0r.</translation>
    </message>
</context>
<context>
    <name>artVignetteDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/artVignette/qt4/artVignette.ui" line="+14"/>
        <source>Vignette</source>
        <translation>Виньетка</translation>
    </message>
    <message>
        <location line="+73"/>
        <source>Size of the unaffected center</source>
        <translation>Размер незатронутого центра</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>Softness</source>
        <translation>Размытость</translation>
    </message>
    <message>
        <location line="-23"/>
        <source>Aspect ratio</source>
        <translation>Соотношение сторон</translation>
    </message>
</context>
<context>
    <name>asciiView</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/asciiView/ADM_vidAscii.cpp" line="+64"/>
        <source>Ascii View</source>
        <translation>ASCII-графика</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ascii view</source>
        <translation>Вид с использованием символов ASCII</translation>
    </message>
</context>
<context>
    <name>asfdemuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Asf/ADM_asf.cpp" line="+158"/>
        <source>File Error.</source>
        <translation>Ошибка файла.</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Cannot open file
</source>
        <translation>Невозможно открыть файл
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Asf/ADM_asfHeaders.cpp" line="+468"/>
        <source>Indexing</source>
        <translation>Индексация</translation>
    </message>
</context>
<context>
    <name>asharp</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/asharp/ADM_vidAsharp.cpp" line="+69"/>
        <source>Asharp</source>
        <translation>ASharp</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Adaptative sharpener by MarcFD.</source>
        <translation>Адаптивный инструмент резкости от MarcFD.</translation>
    </message>
</context>
<context>
    <name>asharpDialog</name>
    <message>
        <source>Strength</source>
        <translation type="obsolete">Сила</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/asharp/qt4/asharp.ui" line="+141"/>
        <source>High quality block filtering</source>
        <translation>Качественная фильтрация блочности (учитывает ось Y)</translation>
    </message>
    <message>
        <location line="-119"/>
        <source>Threshold</source>
        <translation>Порог</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Adaptive strength</source>
        <translation>Адаптивность</translation>
    </message>
    <message>
        <location line="+85"/>
        <source>Block adaptive</source>
        <translation>Учитывать блочность</translation>
    </message>
    <message>
        <source>Show full preview</source>
        <translation type="vanished">Показывать кадр полностью</translation>
    </message>
    <message>
        <source>Block Adaptative</source>
        <translation type="obsolete">Блок адаптации</translation>
    </message>
    <message>
        <location line="-116"/>
        <source>ASharp</source>
        <translation>Фильтр резкости ASharp</translation>
    </message>
    <message>
        <source>Unknown flag</source>
        <translation type="obsolete">Неизвестный флаг</translation>
    </message>
</context>
<context>
    <name>ass</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ass/ADM_vidASS.cpp" line="+204"/>
        <source>_Subtitle file (ASS/SSA):</source>
        <translation>_Файл субтитров (ASS/SSA):</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Select Subtitle File</source>
        <translation>Выбор файла субтитров</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Line spacing:</source>
        <translation>_Межстрочный интервал:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Font scale:</source>
        <translation>Масштаб _шрифта:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Top margin:</source>
        <translation>Чёрная полоса с_верху:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Botto_m margin:</source>
        <translation>Чёрная полоса с_низу:</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>ASS</source>
        <translation>ASS</translation>
    </message>
    <message>
        <location line="-148"/>
        <source>SSA/ASS/SRT</source>
        <translation>SSA/ASS/SRT</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Hardcode ASS/SSA/SRT subtitles using libass.</source>
        <translation>Встроить субтитры ASS/SSA/SRT с использованием libass.</translation>
    </message>
    <message>
        <location line="+91"/>
        <source>Format ?</source>
        <translation>Формат?</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Are you sure this is an ASS/SSA file ?</source>
        <translation>Вы уверены, что это файл ASS/SSA?</translation>
    </message>
    <message>
        <location line="+46"/>
        <source>Do not adjust</source>
        <translation>Не учитывать</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Adjust for display aspect ratio:</source>
        <translation>Учесть соотношение сторон видео (DAR):</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>This is a SRT file. Convert to SSA ?</source>
        <translation>Это файл SRT. Конвертировать в SSA?</translation>
    </message>
    <message>
        <location line="+7"/>
        <location line="+5"/>
        <location line="+9"/>
        <source>Error</source>
        <translation>Ошибка</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Cannot load this SRT file.</source>
        <translation>Невозможно загрузить файл SRT.</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Cannot convert to SSA.</source>
        <translation>Невозможно конвертировать в SSA.</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Cannot save converted file.</source>
        <translation>Невозможно сохранить конвертированный файл.</translation>
    </message>
    <message>
        <location line="+61"/>
        <source>Fonts</source>
        <translation>Шрифты</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Preparing the fonts can take a few minutes the first time.
This message will not be displayed again.</source>
        <translation>В первый раз подготовка шрифтов может занять несколько минут.
Это сообщение больше показываться не будет.</translation>
    </message>
    <message>
        <location line="+89"/>
        <source>SSA Error</source>
        <translation>Ошибка SSA</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>ass_read_file() failed for %s</source>
        <translation>Метод ass_read_file() для файла %s вернул ошибку</translation>
    </message>
</context>
<context>
    <name>avimuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerAvi/muxerAvi.cpp" line="+75"/>
        <source>Bad Idea</source>
        <translation>Плохая идея</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Using H264/H265 in AVI is a bad idea, MKV is better for that.
 Do you want to continue anyway ?</source>
        <translation>Использование H264/H265 в AVI — плохая идея, лучше выбрать MKV.
 Вы всё равно хотите продолжить?</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Error</source>
        <translation>Ошибка</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Cannot create AVI file</source>
        <translation>Невозможно создать файл AVI</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerAvi/muxerAviConfig.cpp" line="+25"/>
        <source>AVI</source>
        <translation>AVI</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Auto</source>
        <translation>Автоматически</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Start as legacy AVI and switch to OpenDML mode when approaching the 4 GiB file size limit</source>
        <translation>Начать с устаревшего AVI и переключиться в режим OpenDML при приближении размера файла к 4 ГиБ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>OpenDML</source>
        <translation>OpenDML</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Muxing Format</source>
        <translation>Формат мультиплексирования</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Avi Muxer</source>
        <translation>Мультиплексор AVI</translation>
    </message>
</context>
<context>
    <name>avsfilter</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/avsfilter/avsfilter.cpp" line="+598"/>
        <source>_wine app file:</source>
        <translation>_Файл приложения wine:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Select wine filename[wine/cedega/etc.]</source>
        <translation>Выберите имя файла wine [wine/cedega/т.п.]</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_loader file:</source>
        <translation>Ф_айл загрузчика:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Select loader filename[avsload.exe]</source>
        <translation>Выберите имя файла загрузчика [avsload.exe]</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_avs file:</source>
        <translation>Фа_йл avs:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Select avs filename[*.avs]</source>
        <translation>Выберите имя файла avs [*.avs]</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_pipe timeout:</source>
        <translation>_Тайм-аут в пайпе:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>AvsFilter config</source>
        <translation>Настройки AvsFilter</translation>
    </message>
</context>
<context>
    <name>bitrate</name>
    <message>
        <location filename="../ADM_UIs/src/T_bitrate.cpp" line="+51"/>
        <source>Constant Bitrate</source>
        <translation>Постоянный битрейт</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Constant Quantiser</source>
        <translation>Постоянный квантизатор</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Same Quantiser as Input</source>
        <translation>Такой же квантизатор, как и на входе</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Constant Rate Factor</source>
        <translation>Постоянный фактор битрейта (CRF)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Two Pass - Video Size</source>
        <translation>2 прохода - размер видео</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Two Pass - Average Bitrate</source>
        <translation>2 прохода - средний битрейт</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Encoding mode</source>
        <translation>Режим кодирования</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Bitrate</source>
        <translation>Битрейт</translation>
    </message>
    <message>
        <location line="+86"/>
        <source>Target bitrate (kb/s)</source>
        <translation>Целевой битрейт (кбит/с)</translation>
    </message>
    <message>
        <location line="+5"/>
        <location line="+19"/>
        <source>Quantizer</source>
        <translation>Квантизатор</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Target video size (MB)</source>
        <translation>Целевой размер видео (МБ)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Average bitrate (kb/s)</source>
        <translation>Средний битрейт (кбит/с)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>-</source>
        <translation>-</translation>
    </message>
</context>
<context>
    <name>black</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/black/ADM_vidBlack.cpp" line="+48"/>
        <source>Black</source>
        <translation>Зачернить</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Replace a section by black.</source>
        <translation>Зачернить отрезок видео.</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>_Start time:</source>
        <translation>_Начало:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_End time:</source>
        <translation>_Конец:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Replace by Black</source>
        <translation>Зачернить</translation>
    </message>
</context>
<context>
    <name>blacken</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/ADM_vidBlackBorder.h" line="+43"/>
        <source>Blacken Borders</source>
        <translation>Зачернение границ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Remove noisy edge by turning them to black.</source>
        <translation>Убрать шум границ, заполнив их чёрным цветом.</translation>
    </message>
</context>
<context>
    <name>blackenDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt4/blackenBorders.ui" line="+14"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt5/blackenBorders.ui" line="+14"/>
        <source>Blacken Borders</source>
        <translation>Зачернение границ</translation>
    </message>
    <message>
        <location line="+38"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt5/blackenBorders.ui" line="+61"/>
        <source>Right:</source>
        <translation>Справа:</translation>
    </message>
    <message>
        <location line="+7"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt5/blackenBorders.ui" line="+7"/>
        <source>Top:</source>
        <translation>Сверху:</translation>
    </message>
    <message>
        <location line="+43"/>
        <source>Reset</source>
        <translation>Сброс</translation>
    </message>
    <message>
        <location line="+21"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt5/blackenBorders.ui" line="+74"/>
        <source>Bottom:</source>
        <translation>Снизу:</translation>
    </message>
    <message>
        <location line="+7"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt5/blackenBorders.ui" line="-14"/>
        <source>Left:</source>
        <translation>Слева:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blackenBorder/qt5/blackenBorders.ui" line="-30"/>
        <source>&amp;Hide Rubber Band</source>
        <translation>&amp;Спрятать резиновые линии</translation>
    </message>
</context>
<context>
    <name>blackframes</name>
    <message>
        <source>BlackFrame</source>
        <translation type="vanished">Чёрный кадр</translation>
    </message>
    <message>
        <source>This function is unsupported at the moment</source>
        <translation type="vanished">В данный момент эта функция не поддерживается</translation>
    </message>
    <message>
        <location filename="../../common/gui_blackframes.cpp" line="+115"/>
        <location line="+156"/>
        <source>Searching black frame..</source>
        <translation>Поиск чёрного кадра...</translation>
    </message>
</context>
<context>
    <name>blend</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blend/ADM_vidBlendFrames.cpp" line="+49"/>
        <source>Blend Frames</source>
        <translation>Объединить кадры</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Blend groups of N frames into a single frame.  Useful for speeding up slow motion footage or creating timelapses.</source>
        <translation>Объединить группу нескольких кадров в один. Полезно для ускорения замедленной съёмки или создания таймлапса.</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Frames</source>
        <translation>Кадры</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Blend</source>
        <translation>Объединить</translation>
    </message>
</context>
<context>
    <name>blur</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blur/ADM_vidBlur.cpp" line="+44"/>
        <source>Blur</source>
        <translation>Размытие</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Blur selected area.</source>
        <translation>Размытие выделенной области.</translation>
    </message>
</context>
<context>
    <name>blurDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/blur/qt4/blur.ui" line="+14"/>
        <source>Blur</source>
        <translation>Размытие</translation>
    </message>
    <message>
        <location line="+59"/>
        <source>radius</source>
        <translation>радиус</translation>
    </message>
    <message>
        <location line="+46"/>
        <source>Left:</source>
        <translation>Слева:</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Top:</source>
        <translation>Сверху:</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Bottom:</source>
        <translation>Снизу:</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Right:</source>
        <translation>Справа:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>&amp;Hide Rubber Band</source>
        <translation>&amp;Спрятать резиновые линии</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Box blur</source>
        <translation>Размытие по рамке</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Near Gaussian</source>
        <translation>По Гауссу</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Gaussian 2 pass</source>
        <translation>2 прохода по Гауссу</translation>
    </message>
</context>
<context>
    <name>changeFps</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/changeFps/changeFps.cpp" line="+40"/>
        <source>Custom</source>
        <translation>Вручную</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>25  (PAL)</source>
        <translation>25  (PAL)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>23.976 (Film)</source>
        <translation>23,976 (Film)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>29.97 (NTSC)</source>
        <translation>29,97 (NTSC)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>50 (Pal)</source>
        <translation>50 (PAL)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>59.94  (NTSC)</source>
        <translation>59,94  (NTSC)</translation>
    </message>
    <message>
        <location line="+32"/>
        <source>Change FPS</source>
        <translation>Изменить частоту кадров</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Speed up/slow down the video as if altering fps. This filter changes duration.</source>
        <translation>Ускорить или замедлить видео за счёт изменения частоты кадров. Этот фильтр изменяет длительность видео.</translation>
    </message>
    <message>
        <location line="+155"/>
        <source>Source Fps:</source>
        <translation>Режим исходной частоты кадров:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Source frame rate:</source>
        <translation>Исходная частота в ручном режиме:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Destination Fps:</source>
        <translation>Режим целевой частоты кадров:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Destination frame rate:</source>
        <translation>Целевая частота в ручном режиме:</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Change fps</source>
        <translation>Изменить частоту кадров</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Error</source>
        <translation>Ошибка</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Invalid fps</source>
        <translation>Неверная частота кадров</translation>
    </message>
</context>
<context>
    <name>chromashift</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/chromaShift/ADM_vidChromaShift.cpp" line="+36"/>
        <source>Shift chroma U/V to fix badly synced luma/chroma.</source>
        <translation>Смещение chroma U/V для исправления плохой синхронизации яркости/цветности (luma/chroma).</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>ChromaShift</source>
        <translation>Сдвиг цветности</translation>
    </message>
</context>
<context>
    <name>chromashiftDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/chromaShift/qt4/chromashift.ui" line="+14"/>
        <source>ChromaShift</source>
        <translation>Сдвиг цветности</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>V Shift</source>
        <translation>Сдвиг V</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>U Shift</source>
        <translation>Сдвиг U</translation>
    </message>
</context>
<context>
    <name>colorBalance</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorBalance/ADM_vidColorBalance.cpp" line="+42"/>
        <source>Color balance</source>
        <translation>Цветовой баланс</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Adjust shadow, midtone and highlight.</source>
        <translation>Настройка тени, полутона и подсветки.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorBalance/qt4/Q_colorBalance.cpp" line="+52"/>
        <source>Peek Ranges</source>
        <translation>Показать зоны</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Show shadow, midtone and highlight areas in black,gray and white colors</source>
        <translation>Отображать тени, полутона и подсвеченные участки в чёрном, сером и белом цветах</translation>
    </message>
</context>
<context>
    <name>colorBalanceDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorBalance/qt4/colorBalance.ui" line="+20"/>
        <source>Color balance</source>
        <translation>Цветовой баланс</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Highlight</source>
        <translation>Освещённость</translation>
    </message>
    <message>
        <location line="+63"/>
        <location line="+135"/>
        <location line="+109"/>
        <source>Saturation</source>
        <translation>Насыщенность</translation>
    </message>
    <message>
        <location line="-205"/>
        <location line="+109"/>
        <location line="+109"/>
        <source>Chroma shift</source>
        <translation>Сдвиг цветности</translation>
    </message>
    <message>
        <location line="-208"/>
        <source>Shadow</source>
        <translation>Тень</translation>
    </message>
    <message>
        <location line="+109"/>
        <source>Midtone</source>
        <translation>Полутон</translation>
    </message>
</context>
<context>
    <name>colorTemp</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorTemp/ADM_vidColorTemp.cpp" line="+41"/>
        <source>Color temperature</source>
        <translation>Температура цвета</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Adjust color temperature.</source>
        <translation>Изменить температуру цвета.</translation>
    </message>
</context>
<context>
    <name>colorTempDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorTemp/qt4/colorTemp.ui" line="+14"/>
        <source>Color Temperature</source>
        <translation>Температура цвета</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Color temperature</source>
        <translation>Температура</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Chroma shift angle</source>
        <translation>Угол смещения цветности</translation>
    </message>
</context>
<context>
    <name>coloryuv</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/colorYUV/ADM_vidColorYuv.cpp" line="+78"/>
        <source>None</source>
        <translation>Нет</translation>
    </message>
    <message>
        <location line="-16"/>
        <source>Avisynth color filter.</source>
        <translation>Цветовой фильтр Avisynth.</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Color management filter.</source>
        <translation>Фильтр управления цветом.</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>AutoWhite</source>
        <translation>Автоматически белый</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>AutoGain</source>
        <translation>Автоусиление</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Clip to Tv Range (16-235)</source>
        <translation>Обрезать до диапазона ТВ (16-235)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>PC-&gt;TV</source>
        <translation>ПК-&gt;ТВ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>TV-&gt;PC</source>
        <translation>ТВ-&gt;ПК</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Levels:</source>
        <translation>Уровни:</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Y gain</source>
        <translation>Усиление Y</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Y Brightness</source>
        <translation>Яркость Y</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Y Gamma</source>
        <translation>Гамма Y</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Y Contrast</source>
        <translation>Контраст Y</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>U gain</source>
        <translation>Усиление U</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>U Brightness</source>
        <translation>Яркость U</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>U Contrast</source>
        <translation>Контраст U</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>V gain</source>
        <translation>Усиление V</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>V Brightness</source>
        <translation>Яркость V</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>V Contrast</source>
        <translation>Контраст V</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Flags</source>
        <translation>Флаги</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Y</source>
        <translation>Y</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>U</source>
        <translation>U</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>V</source>
        <translation>V</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>colorYuv</source>
        <translation>colorYuv</translation>
    </message>
</context>
<context>
    <name>contrast</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/ADM_vidContrast.cpp" line="+34"/>
        <source>Adjust contrast, brightness and colors.</source>
        <translation>Изменение контраста, яркости и цвета.</translation>
    </message>
    <message>
        <location line="-1"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/qt4/Q_contrast.cpp" line="+61"/>
        <location line="+78"/>
        <source>Contrast</source>
        <translation>Контраст</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/qt4/Q_contrast.cpp" line="-77"/>
        <location line="+78"/>
        <source>Brightness</source>
        <translation>Яркость</translation>
    </message>
</context>
<context>
    <name>contrastDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/contrast/qt4/contrast.ui" line="+14"/>
        <location line="+30"/>
        <source>Contrast</source>
        <translation>Контраст</translation>
    </message>
    <message>
        <location line="+88"/>
        <source>Luma</source>
        <translation>Яркость (luma)</translation>
    </message>
    <message>
        <location line="-36"/>
        <source>Brightness</source>
        <translation>Яркость</translation>
    </message>
    <message>
        <location line="-72"/>
        <source>Contrast  </source>
        <translation>Контраст  </translation>
    </message>
    <message>
        <location line="+52"/>
        <source>Brightness  </source>
        <translation>Яркость  </translation>
    </message>
    <message>
        <location line="+49"/>
        <source>ChromaU</source>
        <translation>Компонента U</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>ChromaV</source>
        <translation>Компонента V</translation>
    </message>
    <message>
        <source>Process</source>
        <translation type="vanished">Предпросмотр</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>MPEG2-&gt;PC</source>
        <translation>MPEG2-&gt;PC</translation>
    </message>
</context>
<context>
    <name>convolution</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/ADM_vidFastConvolution.cpp" line="+136"/>
        <source>_Process luma</source>
        <translation>_Обработать яркость (luma)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>P_rocess chroma</source>
        <translation>О_бработать цветность (chroma)</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Process luma plane</source>
        <translation>Обработать плоскость яркости (luma)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Fast Convolution</source>
        <translation>Быстрая свёртка</translation>
    </message>
</context>
<context>
    <name>crash</name>
    <message>
        <location filename="../../common/ADM_osSupport/ADM_crashHook.cpp" line="+83"/>
        <source>Load it</source>
        <translation>Загрузить</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Crash file</source>
        <translation>Файл сбоя</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>I have detected a crash file. 
Do you want to load it  ?
(It will be deleted in all cases, you should save it if you want to keep it)</source>
        <translation>Обнаружен файл сбоя. 
Хотите загрузить его?
(Файл будет удалён в любом случае, поэтому его лучше сохранить, если он вам нужен)</translation>
    </message>
</context>
<context>
    <name>crop</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/ADM_vidCrop.cpp" line="+58"/>
        <source>Crop</source>
        <translation>Кадрирование</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Crop filter</source>
        <translation>Фильтр кадрирования</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Warning Cropping too much width ! Width reseted !
</source>
        <translation>Предупреждение: ширина слишком сильно обрезана! Её значение восстановлено!
</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Warning Cropping too much height ! Height reseted !
</source>
        <translation>Предупреждение: высота слишком сильно обрезана! Её значение восстановлено!
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/DIA_flyCrop.cpp" line="+555"/>
        <location line="+365"/>
        <source>Size: </source>
        <translation>Размер: </translation>
    </message>
    <message>
        <location line="-244"/>
        <source>Auto Crop</source>
        <translation>Автоматика</translation>
    </message>
</context>
<context>
    <name>cropDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt4/crop.ui" line="+14"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="+14"/>
        <source>Crop</source>
        <translation>Кадрирование</translation>
    </message>
    <message>
        <location line="+88"/>
        <source>Reset</source>
        <translation>Сброс</translation>
    </message>
    <message>
        <location line="+58"/>
        <source>Auto Crop</source>
        <translation>Автокадрирование</translation>
    </message>
    <message>
        <location line="-108"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="+45"/>
        <source>Right:</source>
        <translation>Справа:</translation>
    </message>
    <message>
        <location line="+7"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="+67"/>
        <source>Top:</source>
        <translation>Сверху:</translation>
    </message>
    <message>
        <location line="+64"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="-60"/>
        <source>Bottom:</source>
        <translation>Снизу:</translation>
    </message>
    <message>
        <location line="+7"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="-14"/>
        <source>Left:</source>
        <translation>Слева:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/crop/qt5/crop.ui" line="+191"/>
        <source>Size: </source>
        <translation>Размер: </translation>
    </message>
    <message>
        <location line="-107"/>
        <source>&amp;Hide Rubber Band</source>
        <translation>&amp;Спрятать резиновые линии</translation>
    </message>
    <message>
        <source>Keep aspect ratio</source>
        <translation type="vanished">Фиксировать соотношение сторон</translation>
    </message>
    <message>
        <location line="+46"/>
        <location line="+4"/>
        <source>Do not lock</source>
        <translation>Свободное</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Current selection</source>
        <translation>Как в текущем выборе</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Source</source>
        <translation>Как в источнике</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>21:9</source>
        <translation>21:9</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>18:9</source>
        <translation>18:9</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>16:9</source>
        <translation>16:9</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>4:3</source>
        <translation>4:3</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>1:1</source>
        <translation>1:1</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>9:16</source>
        <translation>9:16</translation>
    </message>
    <message>
        <location line="-130"/>
        <source>Lock Aspect Ratio:</source>
        <translation>Фиксировать соотношение сторон:</translation>
    </message>
</context>
<context>
    <name>cubicLUT</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/ADM_vidCubicLUT.cpp" line="+50"/>
        <source>3D LUT</source>
        <translation>3D LUT</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Apply cubic lookup table.</source>
        <translation>Применить кубическую таблицу поиска.</translation>
    </message>
    <message>
        <location line="+72"/>
        <source>Width must match height</source>
        <translation>Ширина должна соответствовать высоте</translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+2"/>
        <source>Invalid resolution</source>
        <translation>Недопустимое разрешение</translation>
    </message>
    <message>
        <location line="+4"/>
        <location line="+72"/>
        <source>Invalid file size</source>
        <translation>Неверный размер файла</translation>
    </message>
    <message>
        <location line="-68"/>
        <location line="+72"/>
        <source>File open error</source>
        <translation>Ошибка открытия файла</translation>
    </message>
    <message>
        <location line="-68"/>
        <location line="+72"/>
        <source>File read error</source>
        <translation>Ошибка чтения файла</translation>
    </message>
    <message>
        <location line="-65"/>
        <source>Can&apos;t find decoder</source>
        <translation>Невозможно найти декодер</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Decoding error. Only 8-bit PNG files are supported.</source>
        <translation>Ошибка декодирования. Поддерживаются только 8-битные файлы PNG.</translation>
    </message>
    <message>
        <location line="+26"/>
        <location line="+82"/>
        <source>Memory error</source>
        <translation>Ошибка памяти</translation>
    </message>
    <message>
        <location line="-12"/>
        <location line="+3"/>
        <location line="+6"/>
        <source>Malformed header</source>
        <translation>Неправильный заголовок</translation>
    </message>
    <message>
        <location line="+53"/>
        <source>Incomplete file</source>
        <translation>Неполный файл</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Invalid file</source>
        <translation>Неверный файл</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/qt4/Q_cubicLUT.cpp" line="+112"/>
        <source>Load HaldCLUT</source>
        <translation>Загрузить HaldCLUT</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Load Cube</source>
        <translation>Загрузить Cube</translation>
    </message>
    <message>
        <location line="+29"/>
        <location line="+26"/>
        <source>Load failed</source>
        <translation>Ошибка загрузки</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>LUT file is not specified!</source>
        <translation>Файл LUT не указан!</translation>
    </message>
</context>
<context>
    <name>cubicLUTDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/cubicLUT/qt4/cubicLUT.ui" line="+14"/>
        <source>3D LUT</source>
        <translation>3D LUT</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Mask</source>
        <translation>Маска</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Load HaldCLUT</source>
        <translation>Загрузить HaldCLUT</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Load Cube</source>
        <translation>Загрузить Cube</translation>
    </message>
</context>
<context>
    <name>dcaenc</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/dcaenc/audioencoder_dcaenc.cpp" line="+272"/>
        <source>_Bitrate:</source>
        <translation>_Битрейт:</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>DcaEnc Configuration</source>
        <translation>Настройки DcaEnc</translation>
    </message>
</context>
<context>
    <name>deband</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/deband/ADM_vidDeband.cpp" line="+32"/>
        <source>Deband</source>
        <translation>Дебандинг</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reduce banding artifacts.</source>
        <translation>Уменьшение артефактов полосатости.</translation>
    </message>
</context>
<context>
    <name>debandDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/deband/qt4/deband.ui" line="+14"/>
        <source>Deband</source>
        <translation>Дебандинг</translation>
    </message>
    <message>
        <location line="+55"/>
        <source>Chroma threshold</source>
        <translation>Порог цветности</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Luma threshold</source>
        <translation>Порог яркости</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Range</source>
        <translation>Диапазон</translation>
    </message>
</context>
<context>
    <name>decimate</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/decimate/decimate.cpp" line="+75"/>
        <source>Replace (interpolate)</source>
        <translation>Заменить (интерполировать)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Pulldown dupe removal</source>
        <translation>Удаление дублей преобразования</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Fastest (no chroma, partial luma)</source>
        <translation>Быстрый (нет chroma, частичная luma)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Medium (full luma, no chroma)</source>
        <translation>Быстрый (нет chroma, полная luma)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>_Mode:</source>
        <translation>_Режим:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Quality:</source>
        <translation>_Качество:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Threshold 1:</source>
        <translation>_Порог 1:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>T_hreshold 2:</source>
        <translation>По_рог 2:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>C_ycle:</source>
        <translation>_Цикл:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Decomb Decimate</source>
        <translation>Прореживатель Decomb</translation>
    </message>
    <message>
        <location line="-39"/>
        <source>Decomb decimate</source>
        <translation>Прореживатель Decomb</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Donald Graft decimate. Remove duplicate after telecide.</source>
        <translation>Прореживатель Дональда Графта. Удаление дубликатов после восстановления.</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Discard closer</source>
        <translation>Отменить ближайшее</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Discard longer dupe (animés)</source>
        <translation>Отменить долгий дубль (для аниме)</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Sho_w</source>
        <translation>_Показать</translation>
    </message>
</context>
<context>
    <name>decimateFrame</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/decimateFrame/ADM_vidDecimateFrame.cpp" line="+54"/>
        <location line="+34"/>
        <source>Decimate</source>
        <translation>Прореживатель</translation>
    </message>
    <message>
        <location line="-33"/>
        <source>Drop duplicate frames.</source>
        <translation>Уборка повторяющихся кадров.</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Normal mode</source>
        <translation>Нормальный режим</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Evaluation mode</source>
        <translation>Режим оценки</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Evaluation mode makes possible to examine the video by printing duplicate metric, while omitting frame dropping.</source>
        <translation>Режим оценки позволяет просматривать видео с выводом метрики повторов без фактической уборки кадров.</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Mode:</source>
        <translation>Режим:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Parameters</source>
        <translation>Параметры</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Duplicate threshold:</source>
        <translation>Порог повторов:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Consecutive frame drop limit:</source>
        <translation>Предел уборки последовательных кадров:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Note: this filter won&apos;t change the reported frame rate</source>
        <translation>Примечание: этот фильтр меняет сообщаемую частоту кадров</translation>
    </message>
</context>
<context>
    <name>delogo2</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/ADM_vidMPdelogo.cpp" line="+41"/>
        <source>MPlayer delogo2</source>
        <translation>MPlayer delogo2</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Blend a logo by interpolating its surrounding box.</source>
        <translation>Стереть логотип с помощью интерполяции окружения.</translation>
    </message>
</context>
<context>
    <name>delogoHQ</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/ADM_vidDelogoHQ.cpp" line="+44"/>
        <source>DelogoHQ</source>
        <translation>DelogoHQ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Clean up arbitrary shaped logo.</source>
        <translation>Скрытие логотипа произвольной формы.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/DIA_flyDelogoHQ.cpp" line="+41"/>
        <source>The selected image has different width/height.</source>
        <translation>Выбранное изображение имеет разную ширину / высоту.</translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Save failed!</source>
        <translation>Не удалось сохранить!</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/Q_delogoHQ.cpp" line="+106"/>
        <source>Find a frame in the preview with the logo clearly visible and not blending into the background.</source>
        <translation>Найдите в предпросмотре чётко видимый логотип, не сливающийся с фоном.</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Save this frame as a PNG image.</source>
        <translation>Сохранить этот кадр как изображение PNG.</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Use an appropriate image editor to paint the area of the logo of any shape white and everything else solid black.</source>
        <translation>Используйте подходящий редактор изображений, чтобы закрасить область логотипа любой формы в белый цвет, а всё остальное — сплошным чёрным.</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>This black and white image will serve as a mask where white pixels correspond to the logo to be removed.</source>
        <translation>Это чёрно-белое изображение будет служить маской, где белые пиксели будут соответствовать удаляемому логотипу.</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>If the logo has fully transparent areas, it is recommended to exclude them from the mask by making them black.</source>
        <translation>Если в логотипе есть полностью прозрачные области, рекомендуется исключить их из маски, сделав их чёрными.</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Load the mask image.</source>
        <translation>Загрузить изображение маски.</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Note: To remove multiple distant logos (e.g. opposite corners), using separate filter instances for each logo will be much faster.</source>
        <translation>Примечание: При удалении нескольких отдалённых логотипов (например, в противоположных углах), использование отдельных экземпляров фильтра для каждого логотипа будет намного быстрее.</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>How to use DelogoHQ</source>
        <translation>Как использовать DelogoHQ</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Save selected frame...</source>
        <translation>Сохранить выбранный кадр…</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Load mask</source>
        <translation>Загрузить маску</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Load failed!</source>
        <translation>Ошибка загрузки!</translation>
    </message>
</context>
<context>
    <name>delogoHQDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/delogoHQ/qt4/delogoHQ.ui" line="+14"/>
        <source>DelogoHQ</source>
        <translation>DelogoHQ</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Mask</source>
        <translation>Маска</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Save current frame...</source>
        <translation>Сохранить текущий кадр…</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Load mask</source>
        <translation>Загрузить маску</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Post-processing</source>
        <translation>Постобработка</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Blur</source>
        <translation>Размытие</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>Gradient</source>
        <translation>Градиент</translation>
    </message>
</context>
<context>
    <name>dgbob</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/dgBob/ADM_vidDGbob.cpp" line="+78"/>
        <source>_Mode:</source>
        <translation>_Режим:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Threshold:</source>
        <translation>_Порог:</translation>
    </message>
    <message>
        <source>_Extra</source>
        <translation type="obsolete">Экстра</translation>
    </message>
    <message>
        <source>Extra check, avoid using it</source>
        <translation type="obsolete">Экстра, избегайте использовать</translation>
    </message>
    <message>
        <location line="-23"/>
        <source>dgbob</source>
        <translation>dgbob</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Donald Graft Bob.</source>
        <translation>Качение Дональда Графта.</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Top</source>
        <translation>Сверху</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bottom</source>
        <translation>Снизу</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Keep nb of frames and fps</source>
        <translation>Сохранить число кадров и кадров/с</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Double nb of frames and fps</source>
        <translation>Удвоить число кадров и кадров/с</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Double nb of frames (slow motion)</source>
        <translation>Удвоить число кадров (замедление)</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>_Top Field First:</source>
        <translation>_Сначала поле сверху:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>_Extra artifact protection (may increase flickering, rarely needed)</source>
        <translation>_Экстразащита от артефактов (может увеличить мерцание, редко требуется)</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>DGBob</source>
        <translation>DGBob</translation>
    </message>
</context>
<context>
    <name>dummy</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/dummy/dummyVideoFilter.cpp" line="+44"/>
        <source>Dummy</source>
        <translation>Пустышка</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Null filter, it does nothing at all.</source>
        <translation>Никакой фильтр применяться не будет.</translation>
    </message>
</context>
<context>
    <name>dummyMuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerDummy/ADM_dummy.cpp" line="+28"/>
        <source>Simulated muxing</source>
        <translation>Имитация мультиплексирования</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>(None)</source>
        <translation>(Нет)</translation>
    </message>
</context>
<context>
    <name>dv</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffDv/ADM_ffDv.cpp" line="+79"/>
        <source>DV only supports 720*576*25fps and 720*480*29.97fps</source>
        <translation>DV поддерживает только 720*576*25 кадров/с и 720*480*29.97 кадров/с</translation>
    </message>
</context>
<context>
    <name>encodingDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/encoding.ui" line="+26"/>
        <source>Encoding...</source>
        <translation>Кодирование...</translation>
    </message>
    <message>
        <location line="+31"/>
        <source>Phase:</source>
        <translation>Этап:</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>When finished:</source>
        <translation>По завершении:</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Close dialog</source>
        <translation>Закрыть окно диалога</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Keep dialog open</source>
        <translation>Не закрывать окно диалога</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Suspend computer</source>
        <translation>Приостановить работу ПК</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Shut down computer</source>
        <translation>Выключить ПК</translation>
    </message>
    <message>
        <location line="+238"/>
        <source>Audio Codec:</source>
        <translation>Кодек аудио:</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Container:</source>
        <translation>Контейнер:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Video Codec:</source>
        <translation>Кодек видео:</translation>
    </message>
    <message>
        <location line="-334"/>
        <location line="+299"/>
        <location line="+21"/>
        <source>None</source>
        <translation>Нет</translation>
    </message>
    <message>
        <location line="-296"/>
        <location line="+289"/>
        <source>Unknown</source>
        <translation>Неизвестно</translation>
    </message>
    <message>
        <location line="+64"/>
        <source>Audio Size:</source>
        <translation>Размер аудио:</translation>
    </message>
    <message>
        <location line="+81"/>
        <source>Average Bitrate:</source>
        <translation>Средний битрейт:</translation>
    </message>
    <message>
        <location line="+7"/>
        <location line="+31"/>
        <location line="+60"/>
        <source>0</source>
        <translation>0</translation>
    </message>
    <message>
        <location line="-525"/>
        <source>Time Remaining:</source>
        <translation>Осталось времени:</translation>
    </message>
    <message>
        <location line="+353"/>
        <source>Total Size:</source>
        <translation>Общий размер:</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Video Size:</source>
        <translation>Размер видео:</translation>
    </message>
    <message>
        <source>Shut down computer when finished</source>
        <translation type="vanished">Выключить ПК по завершении</translation>
    </message>
    <message>
        <location line="-316"/>
        <source>Priority:</source>
        <translation>Приоритет:</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>High</source>
        <translation>Высокий</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Above Normal</source>
        <translation>Выше обычного</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Normal</source>
        <translation>Обычный</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Below Normal</source>
        <translation>Ниже обычного</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Low</source>
        <translation>Низкий</translation>
    </message>
    <message>
        <source>Keep dialog open when finished</source>
        <translation type="vanished">Не закрывать окно по завершении</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Delete first pass log files</source>
        <translation>Удалять файлы статистики от первого прохода</translation>
    </message>
    <message>
        <location line="+30"/>
        <source>Output File:</source>
        <translation>Выходной файл:</translation>
    </message>
    <message>
        <location line="+31"/>
        <source>Minimize to Tray</source>
        <translation>Свернуть в трей</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Pause / Abort</source>
        <translation>Пауза / прервать</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Advanced</source>
        <translation>Дополнительно</translation>
    </message>
    <message>
        <location line="+249"/>
        <source>Processed Frames:</source>
        <translation>Обработано кадров:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Quantiser:</source>
        <translation>Квантизатор:</translation>
    </message>
    <message>
        <location line="+57"/>
        <source>Elapsed:</source>
        <translation>Прошло:</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Frames/sec:</source>
        <translation>Кадров в секунду:</translation>
    </message>
    <message>
        <location line="-571"/>
        <source>Main</source>
        <translation>Основное</translation>
    </message>
    <message>
        <location line="+399"/>
        <location line="+7"/>
        <location line="+14"/>
        <source>0 MB</source>
        <translation>0 МБ</translation>
    </message>
    <message>
        <location line="+77"/>
        <source>0 kB/s</source>
        <translation>0 кбит/c</translation>
    </message>
    <message>
        <location line="+57"/>
        <source>00:00:00</source>
        <translation>00:00:00</translation>
    </message>
</context>
<context>
    <name>eq2</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/eq2/ADM_vidEq2.cpp" line="+45"/>
        <source>Adjust contrast, brightness, saturation and gamma.</source>
        <translation>Настройка контраста, яркости, насыщенности и гаммы.</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>MPlayer eq2</source>
        <translation>MPlayer eq2</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/eq2/qt4/Q_eq2.cpp" line="+63"/>
        <source>Reset</source>
        <translation>Сброс</translation>
    </message>
</context>
<context>
    <name>eq2Dialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/eq2/qt4/eq2.ui" line="+14"/>
        <location line="+31"/>
        <source>Contrast</source>
        <translation>Контраст</translation>
    </message>
    <message>
        <location line="+40"/>
        <source>Saturation</source>
        <translation>Насыщенность</translation>
    </message>
    <message>
        <location line="-20"/>
        <source>Brightness</source>
        <translation>Яркость</translation>
    </message>
    <message>
        <location line="+57"/>
        <source>&lt;b&gt;Gamma&lt;/b&gt;</source>
        <translation>&lt;b&gt;Гамма&lt;/b&gt;</translation>
    </message>
    <message>
        <location line="+85"/>
        <source>Blue</source>
        <translation>Синий</translation>
    </message>
    <message>
        <location line="+39"/>
        <source>Red</source>
        <translation>Красный</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Initial</source>
        <translation>Начальный</translation>
    </message>
    <message>
        <location line="-69"/>
        <source>Weight</source>
        <translation>Вес</translation>
    </message>
    <message>
        <location line="+76"/>
        <source>Green</source>
        <translation>Зелёный</translation>
    </message>
    <message>
        <source>Show full preview</source>
        <translation type="vanished">Показывать кадр полностью</translation>
    </message>
</context>
<context>
    <name>faac</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/faac/audioencoder_faac.cpp" line="+292"/>
        <source>_Bitrate:</source>
        <translation>_Битрейт:</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Faac Configuration</source>
        <translation>Настройки Faac</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/opus/audioencoder_opus.cpp" line="+6"/>
        <source>Opus Configuration</source>
        <translation>Настройки Opus</translation>
    </message>
</context>
<context>
    <name>fadeFromImage</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/ADM_vidFadeFromImage.cpp" line="+38"/>
        <source>Fade from first image</source>
        <translation>Исчезать с первого изображения</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Use image at start time for fading.</source>
        <translation>Использовать изображение во время начала для исчезновения.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/Q_fadeFromImage.cpp" line="+83"/>
        <source>_Start time:</source>
        <translation>_Начало:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_End time:</source>
        <translation>_Конец:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Manual time entry</source>
        <translation>Ввод времени вручную</translation>
    </message>
    <message>
        <location line="+65"/>
        <location line="+19"/>
        <source>Time scope: </source>
        <translation>Временной охват: </translation>
    </message>
    <message>
        <location line="-16"/>
        <location line="+22"/>
        <source>Duration: </source>
        <translation>Длительность: </translation>
    </message>
</context>
<context>
    <name>fadeFromImageDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeFromImage/qt4/fadeFromImage.ui" line="+14"/>
        <source>Fade from first image</source>
        <translation>Исчезать с первого изображения</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Time scope: </source>
        <translation>Временной охват: </translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Duration: </source>
        <translation>Длительность: </translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Manual time entry</source>
        <translation>Ввод времени вручную</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Set from A-B markers</source>
        <translation>Установить из меток A-B</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Effect:</source>
        <translation>Эффект:</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Linear blend</source>
        <translation>Линейное смешивание</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Slide</source>
        <translation>Скольжение</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Wipe</source>
        <translation>Стирание</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Push</source>
        <translation>Толчок</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Luma dissolve</source>
        <translation>Растворение яркости</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Inverse luma dissolve</source>
        <translation>Растворение обратной яркости</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Static random dissolve</source>
        <translation>Статическое случайное растворение</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Dynamic random dissolve</source>
        <translation>Динамическое случайное растворение</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Up</source>
        <translation>Сверху</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Right</source>
        <translation>Справа</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Down</source>
        <translation>Снизу</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Left</source>
        <translation>Слева</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Start preview play before time scope, if you see green.</source>
        <translation>Если вы видите зелёный цвет, начните предпросмотр до начала временного охвата.</translation>
    </message>
</context>
<context>
    <name>fadeInOut</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/ADM_vidFadeIn.cpp" line="+24"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/Q_fadeInOut.cpp" line="+42"/>
        <source>Fade in</source>
        <translation>Появление</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fade in from color.</source>
        <translation>Появление из цвета.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/ADM_vidFadeOut.cpp" line="+24"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/Q_fadeInOut.cpp" line="+2"/>
        <source>Fade out</source>
        <translation>Исчезновение</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fade out to color.</source>
        <translation>Исчезновение в цвет.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/Q_fadeInOut.cpp" line="+43"/>
        <source>_Start time:</source>
        <translation>_Начало:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_End time:</source>
        <translation>_Конец:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Manual time entry</source>
        <translation>Ввод времени вручную</translation>
    </message>
    <message>
        <location line="+88"/>
        <location line="+29"/>
        <source>Time scope: </source>
        <translation>Временной охват: </translation>
    </message>
    <message>
        <location line="-26"/>
        <location line="+32"/>
        <source>Duration: </source>
        <translation>Длительность: </translation>
    </message>
</context>
<context>
    <name>fadeInOutDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeInOut/qt4/fadeInOut.ui" line="+14"/>
        <source>Fade in/out</source>
        <translation>Появление/исчезание</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Time scope: </source>
        <translation>Временной охват: </translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Duration: </source>
        <translation>Длительность: </translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Manual time entry</source>
        <translation>Ввод времени вручную</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Set from A-B markers</source>
        <translation>Установить из меток A-B</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Pick color:</source>
        <translation>Выбрать цвет:</translation>
    </message>
</context>
<context>
    <name>fadeThrough</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/ADM_vfFadeThrough.cpp" line="+32"/>
        <source>Fade through</source>
        <translation>Исчезновение с эффектами</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fade through combination of multiple effects.</source>
        <translation>Исчезновение с комбинацией эффектов.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/Q_fadeThrough.cpp" line="+163"/>
        <source>_Start time:</source>
        <translation>_Начало:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_End time:</source>
        <translation>_Конец:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Manual time entry</source>
        <translation>Ввод времени вручную</translation>
    </message>
    <message>
        <location line="+32"/>
        <source>Not possible!
Start and/or end time would be out of range</source>
        <translation>Нельзя!
Время начала и / или конца выходит за пределы допустимого диапазона</translation>
    </message>
    <message>
        <location line="+159"/>
        <location line="+182"/>
        <source>Time scope: </source>
        <translation>Временной охват: </translation>
    </message>
    <message>
        <location line="-179"/>
        <location line="+192"/>
        <source>Duration: </source>
        <translation>Длительность: </translation>
    </message>
    <message>
        <location line="-5"/>
        <source>Center: </source>
        <translation>Центр: </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/ADM_vfFadeIn.cpp" line="+32"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/Q_fadeThrough.cpp" line="-504"/>
        <source>Fade in</source>
        <translation>Появление</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fade in from combination of multiple effects.</source>
        <translation>Появление с комбинацией эффектов.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/ADM_vfFadeOut.cpp" line="+32"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/Q_fadeThrough.cpp" line="+2"/>
        <source>Fade out</source>
        <translation>Исчезновение</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fade out to combination of multiple effects.</source>
        <translation>Исчезновение с комбинацией эффектов.</translation>
    </message>
</context>
<context>
    <name>fadeThroughDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeThrough/qt4/fadeThrough.ui" line="+20"/>
        <source>Fade through</source>
        <translation>Исчезновение с эффектами</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Time scope: </source>
        <translation>Временной охват: </translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Center: </source>
        <translation>Центр: </translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Duration: </source>
        <translation>Длительность: </translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Manual time entry</source>
        <translation>Ввод времени вручную</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Set from A-B markers</source>
        <translation>Установить из меток A-B</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Set center as A marker, duration is 2×|A-B|</source>
        <translation>Установить центром метку A, длительность: 2×|A-B|</translation>
    </message>
    <message>
        <location line="+34"/>
        <location line="+19"/>
        <source>Brightness</source>
        <translation>Яркость</translation>
    </message>
    <message>
        <location line="-11"/>
        <location line="+128"/>
        <location line="+128"/>
        <location line="+200"/>
        <location line="+125"/>
        <location line="+126"/>
        <location line="+131"/>
        <source>Enable</source>
        <translation>Включить</translation>
    </message>
    <message>
        <location line="-790"/>
        <location line="+128"/>
        <location line="+200"/>
        <location line="+125"/>
        <location line="+131"/>
        <location line="+126"/>
        <location line="+200"/>
        <source>Transient</source>
        <translation>Переходный</translation>
    </message>
    <message>
        <location line="-896"/>
        <location line="+128"/>
        <location line="+200"/>
        <location line="+125"/>
        <location line="+131"/>
        <location line="+126"/>
        <location line="+200"/>
        <source>Raised cosine</source>
        <translation>Приподнятый косинус</translation>
    </message>
    <message>
        <location line="-905"/>
        <location line="+128"/>
        <location line="+200"/>
        <location line="+125"/>
        <location line="+131"/>
        <location line="+126"/>
        <location line="+200"/>
        <source>Ramp</source>
        <translation>Подъём</translation>
    </message>
    <message>
        <location line="-905"/>
        <location line="+128"/>
        <location line="+200"/>
        <location line="+125"/>
        <location line="+131"/>
        <location line="+126"/>
        <location line="+200"/>
        <source>Quadratic</source>
        <translation>Квадратичный</translation>
    </message>
    <message>
        <location line="-905"/>
        <location line="+128"/>
        <location line="+200"/>
        <location line="+125"/>
        <location line="+131"/>
        <location line="+126"/>
        <location line="+200"/>
        <source>Inverse quadratic</source>
        <translation>Обратный квадратичный</translation>
    </message>
    <message>
        <location line="-905"/>
        <location line="+128"/>
        <location line="+200"/>
        <location line="+125"/>
        <location line="+257"/>
        <location line="+200"/>
        <source>Exponential</source>
        <translation>Экспоненциальный</translation>
    </message>
    <message>
        <location line="-902"/>
        <location line="+128"/>
        <location line="+200"/>
        <location line="+125"/>
        <location line="+126"/>
        <location line="+131"/>
        <location line="+200"/>
        <source>duration</source>
        <translation>длительность</translation>
    </message>
    <message>
        <location line="-880"/>
        <location line="+19"/>
        <source>Saturation</source>
        <translation>Насыщенность</translation>
    </message>
    <message>
        <location line="+109"/>
        <source>Color blend</source>
        <translation>Смешивание цвета</translation>
    </message>
    <message>
        <location line="+31"/>
        <location line="+582"/>
        <source>Pick color</source>
        <translation>Выбрать цвет</translation>
    </message>
    <message>
        <location line="-516"/>
        <source>Peak amount</source>
        <translation>Пиковое число</translation>
    </message>
    <message>
        <location line="+103"/>
        <source>Blur</source>
        <translation>Размытие</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Blur radius</source>
        <translation>Радиус размытия</translation>
    </message>
    <message>
        <location line="+106"/>
        <source>Rotate</source>
        <translation>Повернуть</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Peak angle</source>
        <translation>Пиковый угол</translation>
    </message>
    <message>
        <location line="+107"/>
        <source>Zoom</source>
        <translation>Масштаб</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Peak zoom</source>
        <translation>Пиковый масштаб</translation>
    </message>
    <message>
        <location line="+112"/>
        <source>Vignette</source>
        <translation>Виньетка</translation>
    </message>
    <message>
        <location line="+97"/>
        <source>Peak opening</source>
        <translation>Пиковое открытие</translation>
    </message>
</context>
<context>
    <name>fadeTo</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeTo/ADM_vidFadeTo.cpp" line="+59"/>
        <location line="+23"/>
        <source>Fade</source>
        <translation>Затемнение</translation>
    </message>
    <message>
        <location line="-22"/>
        <source>Fade.</source>
        <translation>Затемнить.</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>From</source>
        <translation>От</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Fade from the first picture into movie</source>
        <translation>Затемнять с первой картинки до фильма</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>To</source>
        <translation>До</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Fade from movie to the first picture</source>
        <translation>Затемнять с фильма до первой картинки</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>_Fade direction:</source>
        <translation>_Направление затемнения:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Start time:</source>
        <translation>_Начало:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_End time:</source>
        <translation>_Конец:</translation>
    </message>
</context>
<context>
    <name>fadeToBlack</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fadeToBlack/ADM_vidFade.cpp" line="+55"/>
        <location line="+20"/>
        <source>Fade to black</source>
        <translation>Затемнение до чёрного</translation>
    </message>
    <message>
        <location line="-19"/>
        <source>Fade to black in/out.</source>
        <translation>Затемнить до чёрного (появление/исчезание).</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Out</source>
        <translation>Выход</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Fade out</source>
        <translation>Исчезание</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>In</source>
        <translation>Вход</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Fade in</source>
        <translation>Появление</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>_Fade type:</source>
        <translation>_Тип затемнения:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Start time:</source>
        <translation>_Начальное время:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_End time:</source>
        <translation>_Конечное время:</translation>
    </message>
</context>
<context>
    <name>ffVAEncAV1</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaAV1/ADM_ffVAEncAV1.cpp" line="+312"/>
        <source>Constant Rate Factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Constant Bitrate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Variable Bitrate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Rate Control:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Quality:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bitrate (kbps):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Max Bitrate (kbps):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>GOP Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Rate Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Frame Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+21"/>
        <source>FFmpeg VA-API AV1 Encoder Configuration</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ffVAEncH264</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaH264/ADM_ffVAEncH264.cpp" line="+334"/>
        <source>Baseline</source>
        <translation>Базовый</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Main</source>
        <translation>Основной</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>High</source>
        <translation>Высокий</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Constant Rate Factor</source>
        <translation>Постоянный фактор битрейта (CRF)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Constant Bitrate</source>
        <translation>Постоянный битрейт</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Variable Bitrate</source>
        <translation>Переменный битрейт</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Profile:</source>
        <translation>Профиль:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rate Control:</source>
        <translation>Управление битрейтом:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>GOP Size:</source>
        <translation>Размер группы кадров:</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Maximum Consecutive B-Frames:</source>
        <translation>Максимум последовательных B-кадров:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Quality:</source>
        <translation>Качество:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bitrate (kbps):</source>
        <translation>Битрейт (кбит/с):</translation>
    </message>
    <message>
        <location line="-9"/>
        <source>Max Bitrate (kbps):</source>
        <translation>Максимальный битрейт (кбит/с):</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Rate Control</source>
        <translation>Управление битрейтом</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Frame Control</source>
        <translation>Управление кадрами</translation>
    </message>
    <message>
        <location line="+25"/>
        <source>FFmpeg VA-API H.264 Encoder Configuration</source>
        <translation>Настройки кодировщика FFmpeg VA-API H.264</translation>
    </message>
</context>
<context>
    <name>ffVAEncHEVC</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVaHEVC/ADM_ffVAEncHEVC.cpp" line="+332"/>
        <source>GOP Size:</source>
        <translation>Размер группы кадров:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Maximum Consecutive B-Frames:</source>
        <translation>Максимум последовательных B-кадров:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Bitrate (kbps):</source>
        <translation>Битрейт (кбит/с):</translation>
    </message>
    <message>
        <location line="-6"/>
        <source>Max Bitrate (kbps):</source>
        <translation>Макс. битрейт (кбит/с):</translation>
    </message>
    <message>
        <location line="-12"/>
        <source>Constant Rate Factor</source>
        <translation>Постоянный фактор битрейта (CRF)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Constant Bitrate</source>
        <translation>Постоянный битрейт</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Variable Bitrate</source>
        <translation>Переменный битрейт</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Rate Control:</source>
        <translation>Управление битрейтом:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Quality:</source>
        <translation>Качество:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Rate Control</source>
        <translation>Управление битрейтом</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Frame Control</source>
        <translation>Управление кадрами</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>FFmpeg VA-API HEVC Encoder Configuration</source>
        <translation>Настройки кодировщика FFmpeg VA-API HEVC</translation>
    </message>
</context>
<context>
    <name>ffmpeg2</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg2/ADM_ffMpeg2.cpp" line="+305"/>
        <source>Threading</source>
        <translation>Многопоточность</translation>
    </message>
    <message>
        <location line="+41"/>
        <source>Interlacing</source>
        <translation>Череcстрочность</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Rate Control</source>
        <translation>Управление битрейтом</translation>
    </message>
    <message>
        <location line="-91"/>
        <source>Normal (4:3)</source>
        <translation>Нормальный (4:3)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Wide (16:9)</source>
        <translation>Широкий (16:9)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Default</source>
        <translation>По умолчанию</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Tmpgenc</source>
        <translation>Tmpgenc</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Animes</source>
        <translation>Аниме</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>KVCD</source>
        <translation>KVCD</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>MB comparison</source>
        <translation>Сравнение МБ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fewest bits (vhq)</source>
        <translation>Минимум битов (vhq)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rate distortion</source>
        <translation>Оценка искажений</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>One thread</source>
        <translation>Один поток</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Two threads</source>
        <translation>Два потока</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Three threads</source>
        <translation>Три потока</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Auto (#cpu)</source>
        <translation>Соответственно количеству ядер процессора</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Progressive</source>
        <translation>Прогрессивный</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Interlaced</source>
        <translation>Чересстрочный</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Top Field First</source>
        <translation>Сначала верхнее поле</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bottom Field First</source>
        <translation>Сначала нижнее поле</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Mi_n. quantizer:</source>
        <translation>_Мин. квантизатор:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ma_x. quantizer:</source>
        <translation>М_акс. квантизатор:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Max. quantizer _difference:</source>
        <translation>Макс. _скачок квантизатора:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>VBV Buffer Size:</source>
        <translation>Размер буфера VBV:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Max bitrate (kb/s):</source>
        <translation>Максимальный битрейт (кбит/с):</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Trellis quantization</source>
        <translation>_Треллис-квантование</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Number of B frames:</source>
        <translation>_Число последовательных B-кадров:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>_Macroblock decision:</source>
        <translation>_Определение макроблоков:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Aspect ratio:</source>
        <translation>Формат:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Matrices:</source>
        <translation>Матрицы:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Filesize tolerance (kb):</source>
        <translation>_Допуск размера файла (КБ):</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>_Quantizer compression:</source>
        <translation>_Сжатие квантизатора:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Quantizer _blur:</source>
        <translation>_Размытие квантования:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Gop Size:</source>
        <translation>_Длина группы кадров:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Interlaced:</source>
        <translation>_Исходник:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Field Order:</source>
        <translation>Порядок полей:</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Basic Settings</source>
        <translation>Общие</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Adv. Settings</source>
        <translation>Расширенные</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Quantization</source>
        <translation>Квантование</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>libavcodec MPEG-2 configuration</source>
        <translation>Настройки libavcodec MPEG-2</translation>
    </message>
</context>
<context>
    <name>ffmpeg4</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMpeg4/ADM_ffMpeg4.cpp" line="+220"/>
        <source>Threading</source>
        <translation>Многопоточность</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>User Interface</source>
        <translation>Интерфейс</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Motion Estimation</source>
        <translation>Определение движения</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Rate Control</source>
        <translation>Управление битрейтом</translation>
    </message>
    <message>
        <location line="-67"/>
        <source>H.263</source>
        <translation>H.263</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>MPEG</source>
        <translation>MPEG</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>MB comparison</source>
        <translation>Сравнение макроблоков</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fewest bits (vhq)</source>
        <translation>Минимум битов (vhq)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rate distortion</source>
        <translation>Минимум искажений</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>One thread</source>
        <translation>Один поток</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Two threads</source>
        <translation>Два потока</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Three threads</source>
        <translation>Три потока</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Auto (#cpu)</source>
        <translation>Автоматически (#cpu)</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Mi_n. quantizer:</source>
        <translation>_Мин. квантизатор:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ma_x. quantizer:</source>
        <translation>М_акс. квантизатор:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Max. quantizer _difference:</source>
        <translation>_Разница максимального квантизатора:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>4_MV</source>
        <translation>4_MV</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Trellis quantization</source>
        <translation>_Треллис-квантование</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Quarter pixel</source>
        <translation>_Четверть пикселя</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Number of B frames:</source>
        <translation>_Число B-кадров:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Quantization type:</source>
        <translation>_Тип квантования:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Macroblock decision:</source>
        <translation>О_пределение макроблоков:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Filesize tolerance (kb):</source>
        <translation>_Допуск размера файла (КБ):</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>_Quantizer compression:</source>
        <translation>_Сжатие квантизатора:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Quantizer _blur:</source>
        <translation>_Размытие квантования:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Gop Size:</source>
        <translation>_Размер группы кадров:</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Advanced Simple Profile</source>
        <translation>Расширенный простой профиль</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Quantization</source>
        <translation>Квантование</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>libavcodec MPEG-4 configuration</source>
        <translation>Настройки libavcodec MPEG-4</translation>
    </message>
</context>
<context>
    <name>ffmsmpeg4</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffMsMpeg4/ADM_ffMsMp4.cpp" line="+224"/>
        <source>None</source>
        <translation>Нет</translation>
    </message>
    <message>
        <location line="+37"/>
        <source>User Interface</source>
        <translation>Интерфейс</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Rate Control</source>
        <translation>Управление битрейтом</translation>
    </message>
    <message>
        <location line="-46"/>
        <source>Full</source>
        <translation>Полностью</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Log</source>
        <translation>Журнал</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Phods</source>
        <translation>Phods</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>EPZS</source>
        <translation>EPZS</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>X1</source>
        <translation>X1</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>H.263</source>
        <translation>H.263</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>MPEG</source>
        <translation>MPEG</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>MB comparison</source>
        <translation>Сравнение МБ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fewest bits (vhq)</source>
        <translation>Несколько битов (vhq)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rate distortion</source>
        <translation>Искажение частоты</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Mi_n. quantizer:</source>
        <translation>_Мин. квантизатор:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ma_x. quantizer:</source>
        <translation>М_акс. квантизатор:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Max. quantizer _difference:</source>
        <translation>_Разница макс. квантизатора:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Trellis quantization</source>
        <translation>_Треллис-квантование:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Filesize tolerance (kb):</source>
        <translation>_Допуск размера файла (КБ):</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Quantizer compression:</source>
        <translation>_Сжатие квантизатора:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Quantizer _blur:</source>
        <translation>_Размытие квантизатора:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Gop Size:</source>
        <translation>_Размер группы кадров:</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Quantization</source>
        <translation>Квантование</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>libavcodec MPEG-4 configuration</source>
        <translation>Настройки libavcodec MPEG-4</translation>
    </message>
</context>
<context>
    <name>ffnvenc</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffNvEnc/ADM_ffNvEnc.cpp" line="+307"/>
        <source>Controlled by Preset</source>
        <translation>По предустановке</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Constant Bitrate</source>
        <translation>Постоянный битрейт</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Variable Bitrate</source>
        <translation>Переменный битрейт</translation>
    </message>
    <message>
        <source>Low Quality</source>
        <translation type="obsolete">Низкое качество</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>High Quality</source>
        <translation>Высокое качество</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>BluRay</source>
        <translation>BluRay</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Low Latency</source>
        <translation>Низкая задержка</translation>
    </message>
    <message>
        <source>Low Latency (LQ)</source>
        <translation type="obsolete">Низкий отклик (низкое качество)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Low Latency (HQ)</source>
        <translation>Низкая задержка (высокое качество)</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Baseline</source>
        <translation>Базовый</translation>
    </message>
    <message>
        <location line="-3"/>
        <location line="+4"/>
        <source>Main</source>
        <translation>Основной</translation>
    </message>
    <message>
        <location line="-26"/>
        <source>Constant Quantizer</source>
        <translation>Постоянный квантизатор</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Default</source>
        <translation>Стандартный</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Slow</source>
        <translation>Медленный</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Medium</source>
        <translation>Средний</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fast</source>
        <translation>Быстрый</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>High Performance</source>
        <translation>Высокая скорость</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Low Latency (HP)</source>
        <translation>Низкая задержка (высокая скорость)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Lossless</source>
        <translation>Без потерь</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Lossless (HP)</source>
        <translation>Без потерь (высокая скорость)</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Main10</source>
        <translation>Основной 10</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>High</source>
        <translation>Высокий</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Autoselect</source>
        <translation>Автоопределение</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>1</source>
        <translation>1</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>2</source>
        <translation>2</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>3</source>
        <translation>3</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>4</source>
        <translation>4</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>5</source>
        <translation>5</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>6</source>
        <translation>6</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>7</source>
        <translation>7</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Disabled</source>
        <translation>Отключено</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Each</source>
        <translation>Каждый</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Middle</source>
        <translation>Средний</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>RC Mode:</source>
        <translation>Режим управления битрейтом:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Preset:</source>
        <translation>Предустановка:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Profile:</source>
        <translation>Профиль:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Use B-Frames as References:</source>
        <translation>Использовать B-кадры как опорные:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Maximum Reference Frames:</source>
        <translation>Максимум опорных кадров:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Quality:</source>
        <translation>Качество:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bitrate (kbps):</source>
        <translation>Битрейт (кбит/с):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Max Bitrate (kbps):</source>
        <translation>Максимальный битрейт (кбит/с):</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>GOP Size:</source>
        <translation>Размер группы кадров:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Maximum Consecutive B-Frames:</source>
        <translation>Максимум последовательных B-кадров:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Lookahead:</source>
        <translation>Предсказание:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>AQ Strength:</source>
        <translation>Уровень адаптивного квантования (AQ):</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Spatial AQ</source>
        <translation>Пространственное адаптивное квантование (AQ)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Temporal AQ</source>
        <translation>Временное адаптивное квантование (AQ)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Weighted Prediction</source>
        <translation>Взвешенное предсказание</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Even with HEVC encoding support present, lossless presets and B-frames may be unavailable with older hardware</source>
        <translation>Даже при наличии поддержки кодека HEVC предустановки без потерь и B-кадры могут быть недоступны на старом аппаратном обеспечении</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Even with H.264 encoding support present, lossless presets may be unavailable with older hardware</source>
        <translation>Даже при наличии поддержки кодека H.264 предустановки без потерь могут быть недоступны на старом аппаратном обеспечении</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Lookahead and Adaptive Quantization may be unavailable with older hardware</source>
        <translation>Предсказание и адаптивное квантование могут быть недоступны на старом аппаратном обеспечении</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Weighted prediction is incompatible with B-frames</source>
        <translation>Взвешенное предсказание несовместимо с B-кадрами</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Rate Control</source>
        <translation>Управление битрейтом</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Frame Control</source>
        <translation>Управление кадрами</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>References</source>
        <translation>Опорные</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Basic Settings</source>
        <translation>Общие настройки</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Advanced Settings</source>
        <translation>Расширенные настройки</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>NVENC H.264 configuration</source>
        <translation>Настройки NVENC H.264</translation>
    </message>
    <message>
        <source>nvEnc HEVC  configuration</source>
        <translation type="obsolete">Настройки nvEnc HEVC</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>NVENC HEVC configuration</source>
        <translation>Настройки NVENC HEVC</translation>
    </message>
</context>
<context>
    <name>ffpsmuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPS.cpp" line="+64"/>
        <source>[Mismatch]</source>
        <translation>[Несовпадение]</translation>
    </message>
    <message>
        <location line="+109"/>
        <source>Saving mpeg PS (ff)</source>
        <translation>Сохранение mpeg PS (ff)</translation>
    </message>
    <message>
        <location line="+45"/>
        <source> video not compatible
</source>
        <translation> видео несовместимо
</translation>
    </message>
    <message>
        <location line="+9"/>
        <source> Bad width/height for VCD
</source>
        <translation>Неверная ширина/высота для VCD
</translation>
    </message>
    <message>
        <location line="+6"/>
        <source> Bad width/height for SVCD
</source>
        <translation>Неверная ширина/высота для SVCD
</translation>
    </message>
    <message>
        <location line="+6"/>
        <source> Bad width/height for DVD
</source>
        <translation>Неверная ширина/высота для DVD
</translation>
    </message>
    <message>
        <location line="+17"/>
        <source> VCD : only MP2 audio accepted
</source>
        <translation>VCD: подходит только аудио MP2
</translation>
    </message>
    <message>
        <location line="+5"/>
        <source> VCD : only 44.1 khz audio accepted
</source>
        <translation>VCD: подходит только аудио 44,1 кГц
</translation>
    </message>
    <message>
        <location line="+7"/>
        <source> DVD : only 48 khz audio accepted
</source>
        <translation>DVD: подходит только аудио 48 кГц
</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>[ffPS] DVD : only MP2/AC3/DTS audio accepted
</source>
        <translation>[ffPS] DVD: подходит только аудио MP2/AC3/DTS
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffPS/muxerffPSConfig.cpp" line="+54"/>
        <source>Free</source>
        <translation>Свободно</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Muxing Format</source>
        <translation>Формат мультиплексирования</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Allow non compliant stream</source>
        <translation>Разрешать несовместимый поток</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Total Muxrate (kbits)</source>
        <translation>Общая скорость мультиплексирования (кбит/с)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Video Muxrate (kbits)</source>
        <translation>Скорость мультиплексирования видео (кбит/с)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>VBV size (kBytes)</source>
        <translation>Размер VBV (КБ)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Advanced</source>
        <translation>Дополнительно</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Mpeg PS Muxer</source>
        <translation>Мультиплексор Mpeg PS</translation>
    </message>
</context>
<context>
    <name>fftsmuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffTS/muxerffTS.cpp" line="+71"/>
        <source>Video track is incompatible</source>
        <translation>Видеодорожка несовместима</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Audio track %d out of %u is incompatible</source>
        <translation>Звуковая дорожка %d из %u несовместима</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Audio track %d out of %u is incompatible with M2TS mode</source>
        <translation>Звуковая дорожка %d из %u несовместима с режимом M2TS</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Only MPEG-1/2, VC-1, H264 and HEVC supported for video</source>
        <translation>Для видео поддерживаются только MPEG-1/2, VC-1, H264 и HEVC</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Only AC3, E-AC3, DTS and TrueHD supported for audio</source>
        <translation>Для аудио поддерживаются только AC3, E-AC3, DTS и TrueHD</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Only MP2, MP3, AC3, E-AC3, DTS, AAC and TrueHD supported for audio</source>
        <translation>Для аудио поддерживаются только MP2, MP3, AC3, E-AC3, DTS, AAC и TrueHD</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Unsupported</source>
        <translation>Не поддерживается</translation>
    </message>
    <message>
        <location line="+87"/>
        <source>Saving mpeg TS (ff)</source>
        <translation>Сохранение mpeg TS (ff)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerffTS/muxerffTSConfig.cpp" line="+28"/>
        <source>M2TS mode</source>
        <translation>Режим M2TS</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>VBR muxing</source>
        <translation>Мультиплексирование VBR</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Mux rate (MBits/s)</source>
        <translation>Скорость мультиплексирования (Мбит/с)</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>TS Muxer</source>
        <translation>Мультиплексор TS</translation>
    </message>
</context>
<context>
    <name>ffv1</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffv1/ADM_ffv1Encoder.cpp" line="+139"/>
        <source>Golomb-Rice</source>
        <translation>Голомб-Райс</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Range Coder</source>
        <translation>Кодировщик диапазона</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Small</source>
        <translation>Малый</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Large</source>
        <translation>Большой</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>1</source>
        <translation>1</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>2</source>
        <translation>2</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>4</source>
        <translation>4</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Coder:</source>
        <translation>Кодировщик:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Context:</source>
        <translation>Контекст:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Threads:</source>
        <translation>Потоки:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Error correction/detection</source>
        <translation>Исправление/обнаружение ошибок</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>FFV1 Configuration</source>
        <translation>Настройки FFV1</translation>
    </message>
</context>
<context>
    <name>ffvtenc</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffVTEnc/ADM_ffVTEnc.cpp" line="+196"/>
        <source>Baseline</source>
        <translation>Базовый</translation>
    </message>
    <message>
        <location line="-3"/>
        <location line="+4"/>
        <source>Main</source>
        <translation>Основной</translation>
    </message>
    <message>
        <location line="-3"/>
        <source>Main10</source>
        <translation>Основной 10</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>High</source>
        <translation>Высокий</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Profile:</source>
        <translation>Профиль:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>GOP Size:</source>
        <translation>Размер группы кадров:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Allow B-frames</source>
        <translation>Разрешить B-кадры</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>On some Macs, disabling B-frames is not possible</source>
        <translation>На некоторых устройствах Mac отключение B-кадров невозможно</translation>
    </message>
    <message>
        <source>Maximum Consecutive B-Frames:</source>
        <translation type="vanished">Максимум последовательных B-кадров:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Bitrate (kbps):</source>
        <translation>Битрейт (кбит/с):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Max Bitrate (kbps):</source>
        <translation>Максимальный битрейт (кбит/с):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rate Control</source>
        <translation>Управление битрейтом</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Frame Control</source>
        <translation>Управление кадрами</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>VideoToolbox HEVC Encoder Configuration</source>
        <translation>Настройки кодировщика VideoToolbox HEVC</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>VideoToolbox H.264 Encoder Configuration</source>
        <translation>Настройки кодировщика VideoToolbox H.264</translation>
    </message>
</context>
<context>
    <name>fieldsAlign</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fieldsAlign/ADM_fieldsAlign.cpp" line="+54"/>
        <location line="+224"/>
        <source>Fields Align</source>
        <translation>Выравнивание полей</translation>
    </message>
    <message>
        <location line="-223"/>
        <source>Adjust fields alignment.</source>
        <translation>Подогнать выравнивание полей.</translation>
    </message>
    <message>
        <location line="+214"/>
        <source>Swap fields</source>
        <translation>Поменять поля местами</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Top field horizontal adjust</source>
        <translation>Горизонтальная подгонка верхнего поля</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bottom field horizontal adjust</source>
        <translation>Горизонтальная подгонка нижнего поля</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Top field vertical adjust</source>
        <translation>Вертикальная подгонка верхнего поля</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bottom field vertical adjust</source>
        <translation>Вертикальная подгонка нижнего поля</translation>
    </message>
</context>
<context>
    <name>filesel</name>
    <message>
        <location filename="../../../avidemux_core/ADM_coreUI/src/DIA_fileSel.cpp" line="+150"/>
        <source>File error</source>
        <translation>Ошибка файла</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Cannot open &quot;%s&quot;.</source>
        <translation>Невозможно открыть «%s».</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>%s already exists.

Do you want to replace it?</source>
        <translation>%s уже существует.

Вы хотите его заменить?</translation>
    </message>
    <message>
        <location line="+27"/>
        <location line="+14"/>
        <source>It is possible that you are trying to overwrite an input file!</source>
        <translation>Возможно, вы пытаетесь перезаписать исходный файл!</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Cannot write the file</source>
        <translation>Невозможно записать файл</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>No write access to &quot;%s&quot;.</source>
        <translation>Нет доступа на запись для «%s».</translation>
    </message>
</context>
<context>
    <name>fitToSize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/ADM_vidFitToSize.cpp" line="+58"/>
        <source>Fit to size</source>
        <translation>Подгон под размер</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Resize and pad to the specified size.</source>
        <translation>Изменение и увеличение до указанного размера.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/Q_fitToSize.cpp" line="+76"/>
        <location line="+154"/>
        <source>Preferences</source>
        <translation>Настройки</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Defaults for new filter instances</source>
        <translation>Стандартные значения новых экземпляров фильтра</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Resize method:</source>
        <translation>Метод изменения размера:</translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+19"/>
        <source>Most recently accepted</source>
        <translation>Последний использованный</translation>
    </message>
    <message>
        <location line="-18"/>
        <source>Bilinear</source>
        <translation>Билинейный</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bicubic</source>
        <translation>Бикубический</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Lanczos</source>
        <translation>Ланцош</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Spline</source>
        <translation>Сплайн</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Nearest Neighbor</source>
        <translation>Ближайший сосед</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Padding type:</source>
        <translation>Тип отступов:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Black Bars</source>
        <translation>Чёрные полосы</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Echo</source>
        <translation>Эхо</translation>
    </message>
    <message>
        <location line="+74"/>
        <source>Width and height cannot be odd</source>
        <translation>Значения ширины и высоты должны быть чётными</translation>
    </message>
</context>
<context>
    <name>fitToSizeDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fitToSize/qt4/fitToSize.ui" line="+14"/>
        <source>Fit to size</source>
        <translation>Подгон под размер</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Output settings</source>
        <translation>Настройки выхода</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Width:</source>
        <translation>Ширина:</translation>
    </message>
    <message>
        <location line="+71"/>
        <source>Height:</source>
        <translation>Высота:</translation>
    </message>
    <message>
        <location line="+40"/>
        <source>No rounding</source>
        <translation>Без округления</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Round to the Nearest Multiple of 16</source>
        <translation>Округлять до ближайшего кратного 16</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Round to the Nearest Multiple of 8</source>
        <translation>Округлять до ближайшего кратного 8</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Round to the Nearest Multiple of 4</source>
        <translation>Округлять до ближайшего кратного 4</translation>
    </message>
    <message>
        <location line="+27"/>
        <source>Resize Method:</source>
        <translation>Метод изменения размера:</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Bilinear</source>
        <translation>Билинейный</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Bicubic</source>
        <translation>Бикубический</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Lanczos-3</source>
        <translation>Ланцош-3</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Spline</source>
        <translation>Сплайн</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Aspect ratio tolerance</source>
        <translation>Допуск соотношения сторон</translation>
    </message>
    <message>
        <location line="+74"/>
        <source>0%</source>
        <translation>0%</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Percent</source>
        <translation>Процент</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>100%</source>
        <translation>100%</translation>
    </message>
    <message>
        <location line="+47"/>
        <source>Padding</source>
        <translation>Поля</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>black bars</source>
        <translation>чёрные полосы</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>echo</source>
        <translation>эхо</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Details</source>
        <translation>Подробности</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>Current input dimensions:</source>
        <translation>Текущие входные размеры:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Resized to:</source>
        <translation>Изменение размеров:</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Required padding:</source>
        <translation>Требуемые отступы:</translation>
    </message>
</context>
<context>
    <name>flat360</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/flat360/ADM_vidFlat360.cpp" line="+51"/>
        <source>Flatten 360</source>
        <translation>Плоское видео 360°</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Project 360 degree videos.</source>
        <translation>Проецирование панорамного видео.</translation>
    </message>
</context>
<context>
    <name>flat360Dialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/flat360/qt4/flat360.ui" line="+14"/>
        <source>Flatten 360</source>
        <translation>Плоское видео 360°</translation>
    </message>
    <message>
        <location line="+30"/>
        <source>Edge padding:</source>
        <translation>Краевой отступ:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Source:</source>
        <translation>Источник:</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Interpolation:</source>
        <translation>Интерполяция:</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Equirectangular</source>
        <translation>Равнопромежуточная</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Equi-Angular Cubemap</source>
        <translation>Равноугольная кубическая карта</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Cubemap 3x2 RLUDFB</source>
        <translation>Кубическая карта 3x2 RLUDFB</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Bilinear</source>
        <translation>Билинейная</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Bicubic</source>
        <translation>Бикубическая</translation>
    </message>
    <message>
        <location line="+48"/>
        <source>Roll</source>
        <translation>Крен</translation>
    </message>
    <message>
        <location line="+113"/>
        <source>Distortion</source>
        <translation>Искажение</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Yaw</source>
        <translation>Рыскание</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Pitch</source>
        <translation>Тангаж</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>FoV</source>
        <translation>Поле зрения</translation>
    </message>
</context>
<context>
    <name>flip</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/flip/ADM_vidFlip.cpp" line="+36"/>
        <source>Flip</source>
        <translation>Отражение</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Vertically/Horizontally flip the image.</source>
        <translation>Горизонтально или вертикально отразить изображение.</translation>
    </message>
</context>
<context>
    <name>flipDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/flip/qt4/flip.ui" line="+14"/>
        <source>Flip</source>
        <translation>Отражение</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Horizontal flip</source>
        <translation>Горизонтальное отражение</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Vertical flip</source>
        <translation>Вертикальное отражение</translation>
    </message>
</context>
<context>
    <name>flux</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fluxSmooth/ADM_vidFlux.cpp" line="+88"/>
        <source>_Temporal threshold:</source>
        <translation>_Временной порог:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Spatial threshold:</source>
        <translation>_Пространственный порог:</translation>
    </message>
    <message>
        <location line="-52"/>
        <location line="+56"/>
        <source>FluxSmooth</source>
        <translation>FluxSmooth</translation>
    </message>
    <message>
        <location line="-55"/>
        <source>Spatio-temporal cleaner by Ross Thomas.</source>
        <translation>Пространственно-временная очистка Росса Томаса.</translation>
    </message>
</context>
<context>
    <name>flv1</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffFlv1/ADM_ffFlv1.cpp" line="+192"/>
        <source>User Interface</source>
        <translation>Интерфейс</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Rate Control</source>
        <translation>Управление битрейтом</translation>
    </message>
    <message>
        <location line="-41"/>
        <source>H.263</source>
        <translation>H.263</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>MPEG</source>
        <translation>MPEG</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>MB comparison</source>
        <translation>Сравнение макроблоков</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fewest bits (vhq)</source>
        <translation>Минимум битов (vhq)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rate distortion</source>
        <translation>Минимум искажений</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Mi_n. quantizer:</source>
        <translation>Ми_н. квантизатор:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ma_x. quantizer:</source>
        <translation>Ма_кс. квантизатор:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Max. quantizer _difference:</source>
        <translation>_Разница макс. квантизатора:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Trellis quantization</source>
        <translation>_Треллис-квантование</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Filesize tolerance (kb):</source>
        <translation>_Допуск размера файла (КБ):</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>_Quantizer compression:</source>
        <translation>_Сжатие квантизатора:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Quantizer _blur:</source>
        <translation>_Размытие квантизатора:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Gop Size:</source>
        <translation>_Размер группы кадров:</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Quantization</source>
        <translation>Квантование</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>libavcodec FLV1 configuration</source>
        <translation>Настройки libavcodec FLV1</translation>
    </message>
</context>
<context>
    <name>flvdemuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Flv/ADM_flv.cpp" line="+622"/>
        <source>Warning</source>
        <translation>Предупреждение</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>This FLV file says it has no video.
I will assume it has and try to continue</source>
        <translation>В данном файле FLV не обнаружено видео.
Будет считаться, что оно есть, попытка продолжить</translation>
    </message>
</context>
<context>
    <name>flvmuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerFlv/muxerFlv.cpp" line="+68"/>
        <location line="+10"/>
        <location line="+6"/>
        <source>Unsupported</source>
        <translation>Не поддерживается</translation>
    </message>
    <message>
        <location line="-16"/>
        <source>Only FLV1 &amp; VP6 supported for video</source>
        <translation>Для видео поддерживается только FLV1 и VP6</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Only AAC &amp; mpegaudio supported for audio</source>
        <translation>Для аудио поддерживается только AAC и mpegaudio</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Only 44.1, 22.050 and 11.025 kHz supported</source>
        <translation>Поддерживаются только 44,1, 22,050 и 11,025 кГц</translation>
    </message>
</context>
<context>
    <name>gaussian</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/Gauss.cpp" line="+26"/>
        <source>Gaussian convolution.</source>
        <translation>Гауссова свёртка.</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>3x3 convolution filter :gaussian.</source>
        <translation>Фильтр свёртки 3x3 :gaussian.</translation>
    </message>
</context>
<context>
    <name>glBenchmark</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glBenchmark/benchGl.cpp" line="+61"/>
        <source>OpenGl ReadBack benchmark</source>
        <translation>Тест считывания OpenGL</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Check how fast readback is.</source>
        <translation>Проверьте скорость считывания.</translation>
    </message>
</context>
<context>
    <name>glFragment</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/sample_fragment/sampleGl.cpp" line="+68"/>
        <source>OpenGl Fragment Shader Sample</source>
        <translation>Образец фрагментного шейдера OpenGL</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Run a fragment shader.</source>
        <translation>Запустить фрагментный шейдер.</translation>
    </message>
</context>
<context>
    <name>glFragment2</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/sample_fragment2/sampleGl.cpp" line="+66"/>
        <source>OpenGl Fragment Shader Sample2</source>
        <translation>Второй шаблон фрагментного шейдера OpenGL</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Run a fragment shader.</source>
        <translation>Запустить фрагментный шейдер.</translation>
    </message>
</context>
<context>
    <name>glResize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glResize/sampleGl.cpp" line="+66"/>
        <source>OpenGl Resize</source>
        <translation>Изменение размера OpenGL</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Resize using openGl.</source>
        <translation>Изменение размера с помощью OpenGL.</translation>
    </message>
    <message>
        <location line="+146"/>
        <source>Width :</source>
        <translation>Ширина:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Height :</source>
        <translation>Высота:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>glResize</source>
        <translation>glResize</translation>
    </message>
</context>
<context>
    <name>glRotate</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glRotate/rotateGl.cpp" line="+57"/>
        <source>OpenGl Rotate</source>
        <translation>Поворот OpenGL</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rotate image by a small amount.</source>
        <translation>Поворот изображения на небольшой угол.</translation>
    </message>
    <message>
        <location line="+118"/>
        <source>Angle (°):</source>
        <translation>Угол (°):</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>glRotate</source>
        <translation>glRotate</translation>
    </message>
</context>
<context>
    <name>glSample</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glGlyphy/glGlyphy.cpp" line="+68"/>
        <source>OpenGl Fragment Shader Sample</source>
        <translation>Образец фрагментного шейдера OpenGL</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Run a fragment shader.</source>
        <translation>Запустить фрагментный шейдер.</translation>
    </message>
</context>
<context>
    <name>glShader</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glShaderLoader/shader.cpp" line="-182"/>
        <source>Shader Loader</source>
        <translation>Загрузчик шейдеров</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Run an external shader program.</source>
        <translation>Запустить внешнюю программу шейдеров.</translation>
    </message>
    <message>
        <location line="+192"/>
        <source>ShaderFile to load</source>
        <translation>Файл шейдеров для загрузки</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>ShaderLoader</source>
        <translation>ShaderLoader</translation>
    </message>
</context>
<context>
    <name>glSmooth</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glSmooth/glSmooth.cpp" line="+61"/>
        <source>OpenGl Smooth</source>
        <translation>Сглаживание OpenGL</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Smooth image while preserving edge.</source>
        <translation>Сглаживание изображения с сохранением граней.</translation>
    </message>
</context>
<context>
    <name>glVdpaufilter</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glVdpau/ADM_vidVdpauFilterDeint.cpp" line="+84"/>
        <source>vdpauDeintGl</source>
        <translation>vdpauDeintGl</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>VDPAU deinterlacer+resize, openGl version (faster).</source>
        <translation>Деинтерлейсер + изменение размера VDPAU, версия OpenGL (быстро).</translation>
    </message>
    <message>
        <location line="+178"/>
        <source>Keep Top Field</source>
        <translation>Сохранить поле сверху</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Keep Bottom Field</source>
        <translation>Сохранить поле снизу</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Double framerate</source>
        <translation>Удвоить частоту кадров</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>_Resize:</source>
        <translation>_Изменить размер:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Deint Mode:</source>
        <translation>_Режим деинтерлейса:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Width :</source>
        <translation>Ширина :</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Height :</source>
        <translation>Высота :</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>vdpau</source>
        <translation>vdpau</translation>
    </message>
</context>
<context>
    <name>glVertex</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/sample_vertex/sampleGl.cpp" line="+59"/>
        <source>OpenGl Vertex Shader</source>
        <translation>Вершинный шейдер OpenGL</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Run a simple vertex shader.</source>
        <translation>Запустить простой вершинный шейдер.</translation>
    </message>
</context>
<context>
    <name>glWave</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/sample_distort/sampleGl.cpp" line="+59"/>
        <source>OpenGl wave </source>
        <translation>Волна OpenGL </translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Simple wave filter.</source>
        <translation>Простой волновой фильтр.</translation>
    </message>
</context>
<context>
    <name>glYadif</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glYadif/glYadif.cpp" line="+266"/>
        <source>Bottom field first</source>
        <translation>Сначала нижнее поле</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Top field first</source>
        <translation>Сначала верхнее поле</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>_Mode:</source>
        <translation>_Режим:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Order:</source>
        <translation>_Порядок:</translation>
    </message>
    <message>
        <location line="-194"/>
        <source>Yadif (openGl)</source>
        <translation>Yadif (openGl)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Yet another deinterlacer, using shaders.</source>
        <translation>Ещё один деинтерлейсер, использующий шейдеры.</translation>
    </message>
    <message>
        <location line="+182"/>
        <source>Temporal &amp; spatial check</source>
        <translation>Временная и пространственная проверка</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bob, temporal &amp; spatial check</source>
        <translation>Качение, временная и пространственная проверка</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Skip spatial temporal check</source>
        <translation>Пропустить временную и пространственную проверку</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bob, skip spatial temporal check</source>
        <translation>Качение, пропустить временную и пространственную проверку</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>yadif</source>
        <translation>yadif</translation>
    </message>
</context>
<context>
    <name>grain</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/grain/ADM_vidGrain.cpp" line="+35"/>
        <source>Grain</source>
        <translation>Зернистость</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Film grain effect.</source>
        <translation>Эффект зернистости пленки.</translation>
    </message>
</context>
<context>
    <name>grainDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/grain/qt4/grain.ui" line="+14"/>
        <source>Grain</source>
        <translation>Зернистость</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Noise</source>
        <translation>Шум</translation>
    </message>
</context>
<context>
    <name>hflip</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/horizontalFlip/horizontalFlip.cpp" line="+44"/>
        <source>Horizontal Flip</source>
        <translation>Горизонтальное отражение</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Horizontally flip the image.</source>
        <translation>Горизонтально отразить изображение.</translation>
    </message>
</context>
<context>
    <name>histogram</name>
    <message>
        <source>No data</source>
        <translation type="obsolete">Нет данных</translation>
    </message>
    <message>
        <source>Max. bitrate:</source>
        <translation type="obsolete">Максимальный битрейт:</translation>
    </message>
    <message>
        <source>Average bitrate:</source>
        <translation type="obsolete">Средний битрейт:</translation>
    </message>
    <message>
        <source>Number of I frames:</source>
        <translation type="obsolete">Число I-кадров</translation>
    </message>
    <message>
        <source>Number of P frames:</source>
        <translation type="obsolete">Число P-кадров</translation>
    </message>
    <message>
        <source>Number of B frames:</source>
        <translation type="obsolete">Число B-кадров</translation>
    </message>
    <message>
        <source>Max. B frames:</source>
        <translation type="obsolete">Максимальное количество B-кадров</translation>
    </message>
    <message>
        <source>Bitrate Histogram</source>
        <translation type="obsolete">Диаграмма битрейта</translation>
    </message>
</context>
<context>
    <name>hue</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/hue/ADM_vidHue.cpp" line="+37"/>
        <source>Adjust hue and saturation.</source>
        <translation>Настройка оттенка (hue) и насыщенности.</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Mplayer Hue</source>
        <translation>Mplayer Hue</translation>
    </message>
</context>
<context>
    <name>hueDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/hue/qt4/hue.ui" line="+14"/>
        <location line="+25"/>
        <source>Hue</source>
        <translation>Оттенок (hue)</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Saturation</source>
        <translation>Насыщенность</translation>
    </message>
    <message>
        <source>Show full preview</source>
        <translation type="vanished">Показывать кадр полностью</translation>
    </message>
</context>
<context>
    <name>huff</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/huff/ADM_huffEncoder.cpp" line="+108"/>
        <source>HUFFYUV</source>
        <translation>HUFFYUV</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>FF HUFFYUV</source>
        <translation>FF HUFFYUV</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Type:</source>
        <translation>Тип:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>HuffYUV Configuration</source>
        <translation>Настройки HuffYUV</translation>
    </message>
</context>
<context>
    <name>hzstackfield</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/stackField/hzStackField.cpp" line="+52"/>
        <source>Horizontal Stack Fields</source>
        <translation>Горизонтальные стековые поля</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Put fields side by side.</source>
        <translation>Расположить поля друг за другом.</translation>
    </message>
</context>
<context>
    <name>imageStab</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/imageStab/ADM_vidImageStab.cpp" line="+41"/>
        <source>Image stabilizer</source>
        <translation>Стабилизатор изображения</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reduce camera shakiness.</source>
        <translation>Уменьшение дрожания камеры.</translation>
    </message>
</context>
<context>
    <name>imageStabDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/imageStab/qt4/imageStab.ui" line="+14"/>
        <source>Image stabilizer</source>
        <translation>Стабилизатор изображения</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Smoothing</source>
        <translation>Сглаживание</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Gravity</source>
        <translation>Гравитация</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Interpolation</source>
        <translation>Интерполяция</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Bilinear</source>
        <translation>Билинейная</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Bicubic</source>
        <translation>Бикубическая</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Motion estimation</source>
        <translation>Определение движения</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>accurate</source>
        <translation>точное</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>fast</source>
        <translation>быстрое</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Padding</source>
        <translation>Поля</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Auto Gravity</source>
        <translation>Автоматическая гравитация</translation>
    </message>
    <message>
        <location line="+39"/>
        <source>Scene change detection</source>
        <translation>Обнаружение смены сцены</translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Threshold</source>
        <translation>Порог</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Level</source>
        <translation>Уровень</translation>
    </message>
    <message>
        <source>Scene threshold</source>
        <translation type="vanished">Порог сцены</translation>
    </message>
    <message>
        <location line="-88"/>
        <source>Zoom</source>
        <translation>Масштаб</translation>
    </message>
</context>
<context>
    <name>indexing</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/T_index_pg.cpp" line="+16"/>
        <source>Continue indexing</source>
        <translation>Продолжить индексацию</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Abort Requested</source>
        <translation>Запрос на прерывание</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Do you want to abort indexing ?</source>
        <translation>Хотите прервать индексацию?</translation>
    </message>
    <message>
        <location line="+76"/>
        <source>Time Left :%02d:%02d:%02d</source>
        <translation>Осталось времени :%02d:%02d:%02d</translation>
    </message>
</context>
<context>
    <name>ivtcRemover</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="+91"/>
        <source>Remove IVTC dupe.</source>
        <translation>Удаление дублей IVTC.</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Remove the duplicate frames present after ivtc.</source>
        <translation>Удалить дубликаты кадров, оставшиеся после ivtc.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/admIvtc/ADM_admIvtc.cpp" line="+134"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="+334"/>
        <source>_Noise:</source>
        <translation>_Шум:</translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="+1"/>
        <source>_Show:</source>
        <translation>_Показать:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Remove duplicate:</source>
        <translation>_Удалить дубликат:</translation>
    </message>
    <message>
        <location line="+3"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="+3"/>
        <source>Full</source>
        <translation>Полный</translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="+1"/>
        <source>Fast</source>
        <translation>Быстрый</translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="+1"/>
        <source>VeryFast</source>
        <translation>Очень быстрый</translation>
    </message>
    <message>
        <location line="+3"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="+3"/>
        <source>_Frame rate change:</source>
        <translation>Смен_а частоты кадров:</translation>
    </message>
    <message>
        <location line="+3"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/ivtcDupeRemover/ADM_ivtcDupeRemover.cpp" line="+3"/>
        <source>DupeRemover</source>
        <translation>DupeRemover</translation>
    </message>
</context>
<context>
    <name>jobs</name>
    <message>
        <location filename="../../common/GUI_jobs.cpp" line="+36"/>
        <source>Oops</source>
        <translation>Предупреждение</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Something very wrong happened when building joblist.</source>
        <translation>Что-то непонятное случилось при построении списка заданий.</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>There are no jobs stored</source>
        <translation>Нет сохранённых заданий</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/uiJobs.ui" line="+17"/>
        <source>Avidemux Jobs</source>
        <translation>Задания Avidemux</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Run all pending jobs</source>
        <translation>Запустить все запланированные задания</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Run jobs</source>
        <translation>Запустить задания</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Delete already executed jobs</source>
        <translation>Удалить уже выполненные задания</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Cleanup</source>
        <translation>Очистить</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>If you use VDPAU you cannot use CLI version</source>
        <translation>Невозможно использовать версию CLI вместе с VDPAU</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>use Qt version</source>
        <translation>Использовать приложение на Qt</translation>
    </message>
    <message>
        <location line="+20"/>
        <location filename="../ADM_jobs/src/ADM_jobControl.cpp" line="+186"/>
        <source>Quit</source>
        <translation>Выйти</translation>
    </message>
    <message>
        <location filename="../ADM_jobs/src/ADM_jobControl.cpp" line="-123"/>
        <source>Job</source>
        <translation>Сценарий</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Output</source>
        <translation>Выход</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Status</source>
        <translation>Статус</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Start Time</source>
        <translation>Начало</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>End Time</source>
        <translation>Завершение</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Duration</source>
        <translation>Длительность</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Ready</source>
        <translation>Готово</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Running....</source>
        <translation>Выполнение...</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Success</source>
        <translation>Успешно</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Failed</source>
        <translation>Ошибка</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>???</source>
        <translation>???</translation>
    </message>
    <message>
        <location line="+44"/>
        <source>Delete</source>
        <translation>Удалить</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Run Now</source>
        <translation>Запустить сейчас</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Force Status to success</source>
        <translation>Принудительно сменить статус на успешно</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Force Status to ready</source>
        <translation>Принудительно сменить статус на готово</translation>
    </message>
</context>
<context>
    <name>jobsDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/jobs.ui" line="+13"/>
        <source>Jobs</source>
        <translation>Задания</translation>
    </message>
    <message>
        <location line="+44"/>
        <source>Delete All Jobs</source>
        <translation>Удалить все задания</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>Delete Sel. Job</source>
        <translation>Удалить выбранное задание</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Run All Jobs</source>
        <translation>Запустить все задания</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Run Selected Job</source>
        <translation>Запустить выбранное задание</translation>
    </message>
</context>
<context>
    <name>jpeg</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/jpeg/ADM_jpegEncoder.cpp" line="+106"/>
        <source>_Quantizer:</source>
        <translation>_Квантизатор:</translation>
    </message>
    <message>
        <location line="-4"/>
        <source>YUV422</source>
        <translation>YUV422</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>YUV420</source>
        <translation>YUV420</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>_Pixel format:</source>
        <translation>_Формат пикселей:</translation>
    </message>
    <message>
        <source>_ColorSpace:</source>
        <translation type="vanished">_Цветовое пространство:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Mjpeg Configuration</source>
        <translation>Настройки Mjpeg</translation>
    </message>
</context>
<context>
    <name>kerneldeint</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/kernelDeint/ADM_vidKernelDeint.cpp" line="+70"/>
        <source>_Field order:</source>
        <translation>_Порядок полей:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Threshold:</source>
        <translation>_Порог:</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Smaller means more deinterlacing</source>
        <translation>Чем меньше значение, тем сильнее деинтерлейсинг</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Sharp</source>
        <translation>_Резкость</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>_Sharper engine:</source>
        <translation>_Движок резкости:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Extrapolate better (better not to use it)</source>
        <translation>Улучшенная экстраполяция (лучше не использовать)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Map</source>
        <translation>_Карта</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Show interlaced areas (for test!)</source>
        <translation>Показать области чересстрочности (для проверки!)</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>KernelDeint</source>
        <translation>KernelDeint</translation>
    </message>
    <message>
        <location line="-28"/>
        <source>Kernel Deint.</source>
        <translation>Kernel Deint.</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Port of Donald Graft Kernel Deinterlacer.</source>
        <translation>Порт ядерного деинтерлейсера Дональда Графта.</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Top</source>
        <translation>Сверху</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bottom</source>
        <translation>Снизу</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>T_woway</source>
        <translation>_Два прохода</translation>
    </message>
</context>
<context>
    <name>lame</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/lame/audioencoder_lame.cpp" line="+313"/>
        <source>Bit_rate mode:</source>
        <translation>_Режим битрейта:</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>_Bitrate:</source>
        <translation>_Битрейт:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Quality:</source>
        <translation>_Качество:</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>LAME Configuration</source>
        <translation>Настройки LAME</translation>
    </message>
    <message>
        <location line="-29"/>
        <source>CBR</source>
        <translation>Постоянный битрейт (CBR)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>ABR</source>
        <translation>Усреднённый битрейт (ABR)</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>_Disable reservoir</source>
        <translation>_Отключить использование свободного места в аудиокадре для данных следующего</translation>
    </message>
</context>
<context>
    <name>largemedian</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/largeMedian/ADM_largeMedian.cpp" line="+71"/>
        <source>_Process luma</source>
        <translation>_Обработать яркость (luma)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>P_rocess chroma</source>
        <translation>О_бработать цвет (chroma)</translation>
    </message>
    <message>
        <location line="-36"/>
        <source>Large Median (5x5).</source>
        <translation>Большая медиана (5x5).</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Median filter on 5x5 matrix.</source>
        <translation>Фильтр медианы на матрице 5x5.</translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Process luma plane</source>
        <translation>Обработать плоскость яркости (luma)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Fast Convolution</source>
        <translation>Быстрая свёртка</translation>
    </message>
</context>
<context>
    <name>lavcodec</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/lavcodec/audioencoder_lavcodec.cpp" line="+466"/>
        <source>_Bitrate:</source>
        <translation>_Битрейт:</translation>
    </message>
</context>
<context>
    <name>lavdecoder</name>
    <message>
        <location filename="../../../avidemux_core/ADM_coreVideoCodec/src/DIA_lavDecoder.cpp" line="+23"/>
        <source>_Swap U and V</source>
        <translation>_Поменять U и V</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Decoder Options</source>
        <translation>Параметры декодера</translation>
    </message>
</context>
<context>
    <name>lavdeint</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lavDeint/lavDeint.cpp" line="+188"/>
        <source>None</source>
        <translation>Нет</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Linear interpolate</source>
        <translation>Линейная интерполяция</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Cubic interpolate</source>
        <translation>Кубическая интерполяция</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Median interpolate</source>
        <translation>Средняя интерполяция</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>_Deinterlacing:</source>
        <translation>_Деинтерлейсинг:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Autolevel</source>
        <translation>_Автоматический уровень</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>libavcodec deinterlacer</source>
        <translation>Деинтерлейсер libavcodec</translation>
    </message>
    <message>
        <location line="-131"/>
        <source>Libavdec Deinterlacers</source>
        <translation>Деинтерлейсеры Libavdec</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Lavcodec deinterlacer family.</source>
        <translation>Семейство деинтерлейсеров Lavcodec.</translation>
    </message>
    <message>
        <location line="+117"/>
        <source>Linear blend</source>
        <translation>Линейное смешивание</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>FFmpeg deint</source>
        <translation>Деинтерлейсинг FFmpeg</translation>
    </message>
</context>
<context>
    <name>licenseDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/license.ui" line="+16"/>
        <source>License</source>
        <translation>Лицензия</translation>
    </message>
    <message>
        <location line="+46"/>
        <source>OK</source>
        <translation>Да</translation>
    </message>
</context>
<context>
    <name>logo</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/logo/ADM_vidLogo.cpp" line="+23"/>
        <source>Add logo</source>
        <translation>Добавить логотип</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Put a logo on top of video, with alpha blending.</source>
        <translation>Добавить на видео логотип с альфа-наложением.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/logo/qt4/Q_logo.cpp" line="+67"/>
        <source>Image:</source>
        <translation>Изображение:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>No image selected</source>
        <translation>Изображение не выбрано</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Select Logo Image</source>
        <translation>Выбрать изображение для логотипа</translation>
    </message>
    <message>
        <location line="+70"/>
        <source> s</source>
        <translation> с</translation>
    </message>
</context>
<context>
    <name>logoDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/logo/qt4/logo.ui" line="+14"/>
        <source>Logo</source>
        <translation>Логотип</translation>
    </message>
    <message>
        <source>Image</source>
        <translation type="obsolete">Изображение</translation>
    </message>
    <message>
        <source>Select</source>
        <translation type="obsolete">Выбрать</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Select Image...</source>
        <translation>Выбрать изображение...</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>No image selected</source>
        <translation>Изображение не выбрано</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>X</source>
        <translation>X</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Y</source>
        <translation>Y</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Scaling</source>
        <translation>Масштаб</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Alpha</source>
        <translation>Альфа</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Fade-in/out</source>
        <translation>Появление/исчезание</translation>
    </message>
    <message>
        <source>You can click in the image to approximately position the logo</source>
        <translation type="vanished">Щёлкните на изображение для примерной установки логотипа</translation>
    </message>
</context>
<context>
    <name>lumaStab</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lumaStab/ADM_vidLumaStab.cpp" line="+41"/>
        <source>Luma stabilizer</source>
        <translation>Стабилизатор яркости</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reduce flickering.</source>
        <translation>Уменьшение мерцания.</translation>
    </message>
</context>
<context>
    <name>lumaStabDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lumaStab/qt4/lumaStab.ui" line="+14"/>
        <source>Luma stabilizer</source>
        <translation>Стабилизатор яркости</translation>
    </message>
    <message>
        <location line="+64"/>
        <source>Filter length</source>
        <translation>Длина фильтра</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Scene threshold</source>
        <translation>Порог сцены</translation>
    </message>
    <message>
        <location line="+33"/>
        <source>frames</source>
        <translation>кадры</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Adjust chroma</source>
        <translation>Регулировать цветность</translation>
    </message>
    <message>
        <location line="+43"/>
        <source>Adjust target</source>
        <translation>Регулировать цель</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Prefer contrast</source>
        <translation>Предпочитать контраст</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Prefer brightness</source>
        <translation>Предпочитать яркость</translation>
    </message>
</context>
<context>
    <name>lumaonly</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/lumaOnly/lumaOnly.cpp" line="+44"/>
        <source>GreyScale</source>
        <translation>Оттенки серого</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Remove color, only key grey image.</source>
        <translation>Удаляет все цвета, на выходе только оттенки серого.</translation>
    </message>
</context>
<context>
    <name>mainFilterDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/mainfilter.ui" line="+20"/>
        <source>Video Filter Manager</source>
        <translation>Видеофильтры</translation>
    </message>
    <message>
        <location line="+88"/>
        <source>Transform</source>
        <translation>Трансформация</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Transition</source>
        <translation>Переход</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Interlacing</source>
        <translation>Чересстрочность</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Colors</source>
        <translation>Цвет</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Noise</source>
        <translation>Шумоподавление</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Sharpness</source>
        <translation>Резкость</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Subtitles</source>
        <translation>Субтитры</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Artistic</source>
        <translation>Декорация</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Miscellaneous</source>
        <translation>Прочее</translation>
    </message>
    <message>
        <location line="+111"/>
        <source>Press Ctrl + Enter to accept the dialog</source>
        <translation>Применить настройки и закрыть окно: CTRL+ENTER</translation>
    </message>
    <message>
        <location line="+31"/>
        <source>&amp;Close</source>
        <translation>&amp;Закрыть</translation>
    </message>
    <message>
        <location line="-92"/>
        <source>&lt;big&gt;&lt;b&gt;Active Filters&lt;/b&gt;&lt;/big&gt;</source>
        <translation>&lt;big&gt;&lt;b&gt;Активные фильтры&lt;/b&gt;&lt;/big&gt;</translation>
    </message>
    <message>
        <location line="-32"/>
        <source>&lt;big&gt;&lt;b&gt;Available Filters&lt;/b&gt;&lt;/big&gt;</source>
        <translation>&lt;big&gt;&lt;b&gt;Доступные фильтры&lt;/b&gt;&lt;/big&gt;</translation>
    </message>
    <message>
        <location line="-36"/>
        <source>OpenGl</source>
        <translation>OpenGL</translation>
    </message>
    <message>
        <location line="+149"/>
        <source>&amp;Preview</source>
        <translation>&amp;Предпросмотр</translation>
    </message>
</context>
<context>
    <name>matroskademuxer</name>
    <message>
        <source>Matroska Images</source>
        <translation type="vanished">Изображения Matroska</translation>
    </message>
    <message>
        <source>Matroska clusters</source>
        <translation type="vanished">Кластеры Matroska</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Matroska/ADM_mkvIndexer.cpp" line="+805"/>
        <source>Indexing Matroska Video Track</source>
        <translation>Индексация дорожки видео из Matroska</translation>
    </message>
</context>
<context>
    <name>mcdeint</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mcDeint/ADM_vidMcDeint.cpp" line="+82"/>
        <source>Motion compensation deinterlacer. Ported from MPlayer.</source>
        <translation>Деинтерлейсер компенсации движения. Портирован из MPlayer.</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Fast</source>
        <translation>Быстро</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Medium</source>
        <translation>Средне</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Slow iterative motion search</source>
        <translation>Медленно (последовательный поиск движения)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Extra slow (same as 3+multiple reference frames)</source>
        <translation>Очень медленно (то же, что и 3 + несколько опорных кадров)</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>_Mode:</source>
        <translation>_Режим:</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>mcDeinterlace</source>
        <translation>mcDeinterlace</translation>
    </message>
    <message>
        <location line="-51"/>
        <source>MCDeint</source>
        <translation>MCDeint</translation>
    </message>
    <message>
        <location line="+46"/>
        <source>Bottom :</source>
        <translation>Снизу:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Qp:</source>
        <translation>_Qp:</translation>
    </message>
</context>
<context>
    <name>mean</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/Mean.cpp" line="+27"/>
        <source>Mean convolution.</source>
        <translation>Средняя свёртка.</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>3x3 convolution filter :mean.</source>
        <translation>Фильтр свёртки 3x3 :mean.</translation>
    </message>
</context>
<context>
    <name>median</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/Median.cpp" line="+28"/>
        <source>Median convolution.</source>
        <translation>Медианная свёртка.</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>3x3 convolution filter :median.</source>
        <translation>Фильтр свёртки 3x3 :median.</translation>
    </message>
</context>
<context>
    <name>mergeFields</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fields/ADM_vidMergeField.cpp" line="+52"/>
        <source>Merge Fields</source>
        <translation>Объединить поля</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Merge two pictures as if they were two fields.</source>
        <translation>Объединяет две картинки, как будто они из двух полей.</translation>
    </message>
</context>
<context>
    <name>mkvmuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkv.cpp" line="+84"/>
        <source>Unsupported Video.
Only VP8/VP9/AV1 video and Vorbis/Opus audio supported</source>
        <translation>Несовместимое видео.
Только VP8/VP9/AV1 поддерживаются как видео и Vorbis/Opus как аудио</translation>
    </message>
    <message>
        <location line="+147"/>
        <source>Saving WebM</source>
        <translation>Сохранение в формате WebM</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Saving Mkv</source>
        <translation>Сохранение в формате MKV</translation>
    </message>
    <message>
        <source>Force display width</source>
        <translation type="vanished">Принудительная ширина изображения</translation>
    </message>
    <message>
        <source>Display width</source>
        <translation type="vanished">Ширина изображения</translation>
    </message>
    <message>
        <source>Force Aspect Ratio (DAR)</source>
        <translation type="vanished">Поставить формат кадра (DAR)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMkv/muxerMkvConfig.cpp" line="+33"/>
        <source>Derived from display width</source>
        <translation>От ширины изображения</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>0: sRGB</source>
        <translation>0: sRGB</translation>
    </message>
    <message>
        <location line="+1"/>
        <location line="+22"/>
        <location line="+21"/>
        <source>1: ITU-R BT.709</source>
        <translation>1: МСЭ-R BT.709</translation>
    </message>
    <message>
        <location line="-42"/>
        <location line="+22"/>
        <location line="+21"/>
        <source>2: Unspecified</source>
        <translation>2: Не указано</translation>
    </message>
    <message>
        <location line="-42"/>
        <location line="+22"/>
        <location line="+21"/>
        <source>3: Reserved</source>
        <translation>3: Зарезервировано</translation>
    </message>
    <message>
        <location line="-42"/>
        <source>4: US FCC 73.682</source>
        <translation>4: US FCC 73.682</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>5: ITU-R BT.470BG</source>
        <translation>5: МСЭ-R BT.470BG</translation>
    </message>
    <message>
        <location line="+1"/>
        <location line="+22"/>
        <source>6: SMPTE 170M</source>
        <translation>6: SMPTE 170M</translation>
    </message>
    <message>
        <location line="-21"/>
        <location line="+22"/>
        <location line="+21"/>
        <source>7: SMPTE 240M</source>
        <translation>7: SMPTE 240M</translation>
    </message>
    <message>
        <location line="-42"/>
        <source>8: YCoCg</source>
        <translation>8: YCoCg</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>9: BT2020 Non-constant Luminance</source>
        <translation>9: BT2020 Непостоянная яркость</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>10: BT2020 Constant Luminance</source>
        <translation>10: BT2020 Постоянная яркость</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>11: SMPTE ST 2085</source>
        <translation>11: SMPTE ST 2085</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>12: Chroma-derived Non-constant Luminance</source>
        <translation>12: Непостоянная яркость, полученная из цветности</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>13: Chroma-derived Constant Luminance</source>
        <translation>13: Постоянная яркость, полученная из цветности</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>14: ITU-R BT.2100-0</source>
        <translation>14: МСЭ-R BT.2100-0</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>0: Unspecified</source>
        <translation>0: Не указано</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>1: Limited</source>
        <translation>1: Ограниченный</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>2: Full</source>
        <translation>2: Расширенный</translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+21"/>
        <source>0: Reserved</source>
        <translation>0: Зарезервировано</translation>
    </message>
    <message>
        <location line="-17"/>
        <source>4: Gamma 2.2 curve - BT.470M</source>
        <translation>4: Кривая гаммы 2.2 - BT.470M</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>5: Gamma 2.8 curve - BT.470BG</source>
        <translation>5: Кривая гаммы 2.8 - BT.470BG</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>8: Linear</source>
        <translation>8: Линейный</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>9: Logarithmic (100:1 range)</source>
        <translation>9: Logarithmic (100:1 range)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>10: Logarithmic (100 * Sqrt(10) : 1 range)</source>
        <translation>10: Logarithmic (100 * Sqrt(10) : 1 range)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>11: IEC 61966-2-4</source>
        <translation>11: IEC 61966-2-4</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>12: ITU-R BT.1361 Extended Colour Gamut</source>
        <translation>12: МСЭ-R BT.1361 Расширенная цветовая гамма</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>13: IEC 61966-2-1</source>
        <translation>13: IEC 61966-2-1</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>14: ITU-R BT.2020 10 bit</source>
        <translation>14: МСЭ-R BT.2020 10 bit</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>15: ITU-R BT.2020 12 bit</source>
        <translation>15: МСЭ-R BT.2020 12 bit</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>16: ITU-R BT.2100 Perceptual Quantization</source>
        <translation>16: МСЭ-R BT.2100 Перцептивное квантование</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>17: SMPTE ST 428-1</source>
        <translation>17: SMPTE ST 428-1</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>18: ARIB STD-B67 (HLG)</source>
        <translation>18: ARIB STD-B67 (HLG)</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>4: ITU-R BT.470M</source>
        <translation>4: МСЭ-R BT.470M</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>5: ITU-R BT.470BG - BT.601 625</source>
        <translation>5: МСЭ-R BT.470BG - BT.601 625</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>6: ITU-R BT.601 525 - SMPTE 170M</source>
        <translation>6: МСЭ-R BT.601 525 - SMPTE 170M</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>8: Film</source>
        <translation>8: Фильм</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>9: ITU-R BT.2020</source>
        <translation>9: МСЭ-R BT.2020</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>10: SMPTE ST 428-1</source>
        <translation>10: SMPTE ST 428-1</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>11: SMPTE RP 431-2</source>
        <translation>11: SMPTE RP 431-2</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>12: SMPTE EG 432-2</source>
        <translation>12: SMPTE EG 432-2</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>22: JEDEC P22 phosphors</source>
        <translation>22: JEDEC P22 phosphors</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Force aspect ratio</source>
        <translation>Форсировать соотношение сторон</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Display width:</source>
        <translation>Ширина изображения:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Aspect Ratio (DAR):</source>
        <translation>Формат кадра (DAR):</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Add color info</source>
        <translation>Добавить сведения о цветовых свойствах</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Matrix Coefficients:</source>
        <translation>Коэффициенты матрицы:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Range:</source>
        <translation>Диапазон:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Transfer Characteristic:</source>
        <translation>Характеристики перехода:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Color Primaries:</source>
        <translation>Первичные цвета:</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Basic Settings</source>
        <translation>Общие настройки</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Advanced Settings</source>
        <translation>Расширенные настройки</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>WebM Muxer</source>
        <translation>Мультиплексор WebM</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>MKV Muxer</source>
        <translation>Мультиплексор MKV</translation>
    </message>
</context>
<context>
    <name>mp3d</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDenoise3D/ADM_vidMPLD3D.cpp" line="+201"/>
        <source>Mplayer Denoise 3D HQ</source>
        <translation>Mplayer Denoise 3D HQ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reduce noise, smooth image, increase compressibility. HQ Version.</source>
        <translation>Уменьшение шума, сглаживание изображения, увеличение сжатия. Версия высокого качества.</translation>
    </message>
    <message>
        <location line="+32"/>
        <source>_Spatial luma strength:</source>
        <translation>_Пространственный уровень яркости (luma):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>S_patial chroma strength:</source>
        <translation>П_ространственный уровень цветности (chroma):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Temporal luma strength:</source>
        <translation>_Временной уровень яркости (luma):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>T_emporal chroma strength:</source>
        <translation>Вр_еменной уровень цветности (chroma):</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>MPlayer Denoise 3D HQ</source>
        <translation>MPlayer Denoise 3D HQ</translation>
    </message>
</context>
<context>
    <name>mp3dlow</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDenoise3D/ADM_vidMPLD3Dlow.cpp" line="+37"/>
        <source>Reduce noise, smooth image, increase compressibility.</source>
        <translation>Уменьшение шума, сглаживание изображения, увеличение сжатия.</translation>
    </message>
    <message>
        <location line="+34"/>
        <source>_Temporal strength:</source>
        <translation>_Временной уровень:</translation>
    </message>
    <message>
        <location line="-35"/>
        <source>Mplayer Denoise 3D</source>
        <translation>Mplayer Denoise 3D</translation>
    </message>
    <message>
        <location line="+33"/>
        <source>_Spatial luma strength:</source>
        <translation>_Пространственный уровень яркости (luma):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>S_patial chroma strength:</source>
        <translation>П_ространственный уровень цветности (chroma):</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>MPlayer Denoise 3D</source>
        <translation>MPlayer Denoise 3D</translation>
    </message>
</context>
<context>
    <name>mp4demuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Mp4/ADM_mp4Analyzer.cpp" line="+1485"/>
        <source>Problem reading SVQ3 headers</source>
        <translation>Ошибка чтения заголовков SVQ3</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/Mp4/ADM_mp4.cpp" line="+550"/>
        <location line="+142"/>
        <source>Decoding frame type</source>
        <translation>Декодирование типа кадров</translation>
    </message>
</context>
<context>
    <name>mp4muxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4.cpp" line="+157"/>
        <source>Unsupported</source>
        <translation>Не поддерживается</translation>
    </message>
    <message>
        <location line="-49"/>
        <source>Video track is incompatible</source>
        <translation>Видеодорожка несовместима</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Audio track %d out of %u is incompatible</source>
        <translation>Звуковая дорожка %d из %u несовместима</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Only MPEG-4, H264, H265, AV1, DNxHD and ProRes supported for video</source>
        <translation>Для видео поддерживаются только MPEG-4, H264, H265, AV1, DNxHD и ProRes</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Only MPEG-1/2/4, H264, H265 and AV1 supported for video</source>
        <translation>Для видео поддерживаются только MPEG-1/2/4, H264, H265 и AV1</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Only AAC, AC3, DTS, E-AC3, (L)PCM, MP2, MP3 and Vorbis supported for audio</source>
        <translation>Для аудио поддерживаются только AAC, AC3, DTS, E-AC3, (L)PCM, MP2, MP3 и Vorbis</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Only AAC, AC3, DTS, E-AC3, MP2, MP3 and Vorbis supported for audio</source>
        <translation>Для аудио поддерживаются только AAC, AC3, DTS, E-AC3, MP2, MP3 и Vorbis</translation>
    </message>
    <message>
        <location line="+227"/>
        <source>Saving mp4</source>
        <translation>Сохранение в формате MP4</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Saving PSP</source>
        <translation>Сохранение в формате PSP</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Saving mov</source>
        <translation>Сохранение в формате MOV</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Optimizing...</source>
        <translation>Оптимизация...</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4/muxerMP4Config.cpp" line="+38"/>
        <source>Muxing Format</source>
        <translation>Формат мультиплексирования</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>No optimization</source>
        <translation>Без оптимизации</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Move index to the beginning of the file</source>
        <translation>Переместить индекс к началу файла</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Use fragmentation</source>
        <translation>Фрагментировать</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Optimize for Streaming</source>
        <translation>Оптимизировать для потоковой передачи</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Force aspect ratio</source>
        <translation>Форсировать соотношение сторон</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Derived from display width</source>
        <translation>От ширины изображения</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Aspect Ratio (DAR)</source>
        <translation>Формат кадра (DAR)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Display Width</source>
        <translation>Ширина изображения</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Do not rotate</source>
        <translation>Не вращать</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>90°</source>
        <translation>на 90 градусов</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>180°</source>
        <translation>на 180 градусов</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>270°</source>
        <translation>на 270 градусов</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Rotate video</source>
        <translation>Повернуть кадр</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Auto</source>
        <translation>Автоматически</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>24 kHz</source>
        <translation>24 кГц</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>25 kHz</source>
        <translation>25 кГц</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>30 kHz</source>
        <translation>30 кГц</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>50 kHz</source>
        <translation>50 кГц</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>60 kHz</source>
        <translation>60 кГц</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>90 kHz</source>
        <translation>90 кГц</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>180 kHz</source>
        <translation>180 кГц</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Time scale</source>
        <translation>Шкала времени</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>MOV Muxer</source>
        <translation>Мультиплексор MOV</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>MP4 Muxer</source>
        <translation>Мультиплексор MP4</translation>
    </message>
</context>
<context>
    <name>mp4v2muxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2.cpp" line="+181"/>
        <source>Audio</source>
        <translation>Аудио</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Audio format not supported, only AAC/MP3/AC3</source>
        <translation>Формат аудио не поддерживается, только AAC/MP3/AC3</translation>
    </message>
    <message>
        <location line="+46"/>
        <source>Saving</source>
        <translation>Сохранение</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Video</source>
        <translation>Видео</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Video does not have enough timing information. Are you copying from AVI?</source>
        <translation>В видео недостаточно информации о временных метках. Вы копируете из AVI?</translation>
    </message>
    <message>
        <location line="+61"/>
        <source>Optimizing</source>
        <translation>Оптимизация</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Cannot rename file (optimize)</source>
        <translation>Невозможно переименовать файл (оптимизировать)</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2Audio.cpp" line="+53"/>
        <source>Invalid frequency for AC3. Only 32, 44.1 &amp; 48 kHz</source>
        <translation>Неверная частота для AC3. Только 32, 44,1 и 48 кГц</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Invalid bitrate for AC3</source>
        <translation>Неверный битрейт для AC3</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Invalid number of channels for AC3</source>
        <translation>Неверное количество каналов для AC3</translation>
    </message>
    <message>
        <location line="+48"/>
        <source>Cannot get AAC Extra data
</source>
        <translation>Невозможно получить экстраданные AAC
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerMp4v2/muxerMp4v2Config.cpp" line="+31"/>
        <source>Optimize for streaming (SLOW)</source>
        <translation>Оптимизировать для стриминга (МЕДЛЕННО)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Add ipod metadata</source>
        <translation>Добавить метаданные iPod</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>MP4V2 Settings</source>
        <translation>Настройки MP4V2</translation>
    </message>
</context>
<context>
    <name>mpdelogoDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt4/mpdelogo.ui" line="+14"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="+14"/>
        <source>Mplayer Delogo</source>
        <translation>Mplayer Delogo</translation>
    </message>
    <message>
        <location line="+8"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="+12"/>
        <source>X</source>
        <translation>X</translation>
    </message>
    <message>
        <location line="+20"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="+37"/>
        <source>Y</source>
        <translation>Y</translation>
    </message>
    <message>
        <location line="+23"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="-17"/>
        <source>Width</source>
        <translation>Ширина</translation>
    </message>
    <message>
        <location line="+20"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="+7"/>
        <source>Height</source>
        <translation>Высота</translation>
    </message>
    <message>
        <location line="+20"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="-14"/>
        <source>Border Width</source>
        <translation>Ширина границы</translation>
    </message>
    <message>
        <location line="+50"/>
        <source>Preview. Click in the image above to coarsly set the box coordinates</source>
        <translation>Предпросмотр. Щёлкните на изображение выше для примерной установки координат</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/DIA_flyMpDelogo.cpp" line="+461"/>
        <source>You can resize the red rectangle using the grips </source>
        <translation>Вы можете изменить размер красного прямоугольника с помощью указателей </translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mplayerDelogo/qt5/mpdelogo.ui" line="+74"/>
        <source>Preview</source>
        <translation>Предпросмотр</translation>
    </message>
</context>
<context>
    <name>msharpen</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mSharpen/ADM_vidMSharpen.cpp" line="+48"/>
        <source>Msharpen</source>
        <translation>MSharpen</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Sharpen edges without amplifying noise. By Donald Graft.</source>
        <translation>Повысить резкость граней без увеличения шума. От Дональда Графта.</translation>
    </message>
</context>
<context>
    <name>msharpenDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/mSharpen/qt4/msharpen.ui" line="+14"/>
        <source>MSharpen</source>
        <translation>Фильтр резкости MSharpen</translation>
    </message>
    <message>
        <source>Show full preview</source>
        <translation type="vanished">Показывать кадр полностью</translation>
    </message>
    <message>
        <location line="+59"/>
        <source>Mask</source>
        <translation>Показать маску</translation>
    </message>
    <message>
        <location line="-21"/>
        <source>Strength</source>
        <translation>Сила</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Threshold</source>
        <translation>Порог</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>HighQuality</source>
        <translation>Высокое качество</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Process chroma</source>
        <translation>Обрабатывать цветность</translation>
    </message>
</context>
<context>
    <name>navigate</name>
    <message>
        <location filename="../../common/gui_navigate.cpp" line="+368"/>
        <source>Cannot go to next frame</source>
        <translation>Невозможно перейти к следующему кадру</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Cannot go to next keyframe</source>
        <translation>Невозможно перейти к следующему ключевому кадру</translation>
    </message>
    <message>
        <location line="+67"/>
        <source>Cannot go to previous keyframe</source>
        <translation>Невозможно перейти к предыдущему ключевому кадру</translation>
    </message>
    <message>
        <location line="+27"/>
        <source>Cannot go to previous frame</source>
        <translation>Невозможно перейти к предыдущему кадру</translation>
    </message>
    <message>
        <location line="+382"/>
        <source>Seek</source>
        <translation>Поиск</translation>
    </message>
    <message>
        <location line="+92"/>
        <source>Error</source>
        <translation>Ошибка</translation>
    </message>
</context>
<context>
    <name>negative</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/negative/ADM_negative.cpp" line="+46"/>
        <source>Negative</source>
        <translation>Негатив</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Invert Y,U or V plane</source>
        <translation>Инвертировать плоскости Y, U или V</translation>
    </message>
    <message>
        <location line="+112"/>
        <source>Invert Y Plane</source>
        <translation>Инвертировать яркость</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Process luma plane</source>
        <translation>Обработать плоскость яркости (luma)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Invert U Plane</source>
        <translation>Инвертировать цветовую составляющую U</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Process chromaU plane</source>
        <translation>Обработать плоскость цветности (chroma) U</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Invert V Plane</source>
        <translation>Инвертировать цветовую составляющую V</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Process chromaV plane</source>
        <translation>Обработать плоскость цветности (chroma) V</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Invert plane</source>
        <translation>Негатив</translation>
    </message>
</context>
<context>
    <name>nvenc</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/nvEnc/ADM_nvEnc.cpp" line="+136"/>
        <source>Low Quality</source>
        <translation>Низкое качество</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>High Quality</source>
        <translation>Высокое качество</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>BluRay</source>
        <translation>BluRay</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Low Latency</source>
        <translation>Низкая задержка</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Low Latency (LQ)</source>
        <translation>Низкая задержка (низкое качество)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Low Latency (HQ)</source>
        <translation>Минимальная задержка (высокое качество)</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Preset:</source>
        <translation>Предустановка:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bitrate (kbps):</source>
        <translation>Битрейт (кбит/с):</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Max Bitrate (kbps):</source>
        <translation>Макс. битрейт (кбит/с):</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Nvidia H264 Encoder configuration</source>
        <translation>Настройки кодировщика Nvidia H264</translation>
    </message>
</context>
<context>
    <name>opendmldemuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/OpenDml/ADM_openDML.cpp" line="+342"/>
        <location line="+76"/>
        <location line="+269"/>
        <source>Malformed header</source>
        <translation>Заголовок неверной формы</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/OpenDml/ADM_openDMLDepack.cpp" line="+85"/>
        <source>Unpacking bitstream</source>
        <translation>Распаковка потока</translation>
    </message>
</context>
<context>
    <name>partial</name>
    <message>
        <location filename="../../common/ADM_videoFilter2/src/ADM_vidPartial.cpp" line="+388"/>
        <source>Partialize &quot;%s&quot;</source>
        <translation>Частичное наложение «%s»</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>_Start time:</source>
        <translation>_Начало:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_End time:</source>
        <translation>_Конец:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Configure filter</source>
        <translation>Настроить фильтр</translation>
    </message>
    <message>
        <source>Partial Filter</source>
        <translation type="vanished">Частичный фильтр</translation>
    </message>
</context>
<context>
    <name>pcm</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/pcm/audioencoder_pcm.cpp" line="+205"/>
        <source>PCM</source>
        <translation>PCM</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>LPCM</source>
        <translation>LPCM</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Output format:</source>
        <translation>Формат на выходе:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>PCM Configuration</source>
        <translation>Настройки кодировщика PCM</translation>
    </message>
</context>
<context>
    <name>printinfo</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/printInfo/printInfo.cpp" line="+44"/>
        <source>PrintInfo</source>
        <translation>PrintInfo</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Display some informations on Screen.</source>
        <translation>Вывод отдельной информации на экран.</translation>
    </message>
</context>
<context>
    <name>propsDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/props.ui" line="+14"/>
        <source>Properties</source>
        <translation>Свойства</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Video</source>
        <translation>Видео</translation>
    </message>
    <message>
        <location line="+66"/>
        <source>Frame Rate:</source>
        <translation>Частота кадров:</translation>
    </message>
    <message>
        <location line="+28"/>
        <location line="+226"/>
        <source>Total Duration:</source>
        <translation>Общая длительность:</translation>
    </message>
    <message>
        <location line="-289"/>
        <location line="+14"/>
        <location line="+14"/>
        <location line="+14"/>
        <location line="+14"/>
        <location line="+14"/>
        <location line="+21"/>
        <location line="+14"/>
        <location line="+14"/>
        <location line="+14"/>
        <location line="+14"/>
        <location line="+31"/>
        <location line="+62"/>
        <location line="+14"/>
        <location line="+14"/>
        <location line="+14"/>
        <location line="+14"/>
        <source>n/a</source>
        <translation>н/д</translation>
    </message>
    <message>
        <location line="-275"/>
        <source>Aspect Ratio:</source>
        <translation>Соотношение сторон:</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Image Size:</source>
        <translation>Размер картинки:</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Codec 4CC:</source>
        <translation>Кодек 4СС:</translation>
    </message>
    <message>
        <location line="+56"/>
        <source>Average Bitrate:</source>
        <translation>Средний битрейт:</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Pixel format:</source>
        <translation>Формат пикселей:</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Color range:</source>
        <translation>Цветовой диапазон:</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Color primaries:</source>
        <translation>Первичные цвета:</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Transfer characteristics:</source>
        <translation>Функция преобразования:</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Color space:</source>
        <translation>Цветовое пространство:</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Video Codec Extradata</source>
        <translation>Экстраданные видеокодека</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Size:</source>
        <translation>Размер:</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Extradata:</source>
        <translation>Экстраданные:</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Audio</source>
        <translation>Аудио</translation>
    </message>
    <message>
        <location line="+66"/>
        <source>Frequency:</source>
        <translation>Частота дискретизации:</translation>
    </message>
    <message>
        <source>Variable Bitrate:</source>
        <translation type="vanished">Переменный битрейт:</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Bitrate:</source>
        <translation>Битрейт:</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Channels:</source>
        <translation>Каналы:</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Codec:</source>
        <translation>Кодек:</translation>
    </message>
    <message>
        <source>TextLabel</source>
        <translation type="vanished">Текстовая метка</translation>
    </message>
    <message>
        <source>Extra Video Properties</source>
        <translation type="vanished">Дополнительные свойства видео</translation>
    </message>
    <message>
        <source>ExtraDataSize:</source>
        <translation type="vanished">Размер дополнительных данных:</translation>
    </message>
    <message>
        <source>Extra data :</source>
        <translation type="vanished">Дополнительные данные:</translation>
    </message>
    <message>
        <location line="+75"/>
        <source>Copy to Clipboard</source>
        <translation>Копировать в буфер обмена</translation>
    </message>
    <message>
        <location line="+29"/>
        <source>OK</source>
        <translation>Да</translation>
    </message>
</context>
<context>
    <name>psdemuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegPS/ADM_psIndex.cpp" line="+260"/>
        <source>Indexing</source>
        <translation>Индексируется</translation>
    </message>
    <message>
        <location line="-32"/>
        <source>There are several files with sequential file names. Should they be all loaded ?</source>
        <translation>Обнаружено несколько файлов с последовательными именами. Загрузить их все?</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegPS/ADM_ps.cpp" line="+79"/>
        <source>This file&apos;s index has been created with an older version of avidemux.
The file must be re-indexed. Proceed?</source>
        <translation>Этот файл был индексирован более старой версией Avidemux.
Файл необходимо переиндексировать. Продолжить?</translation>
    </message>
</context>
<context>
    <name>qaudiotracks</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_audioTracks.cpp" line="+132"/>
        <source>Select audio file</source>
        <translation>Выбрать файл аудио</translation>
    </message>
    <message>
        <location line="+22"/>
        <location line="+209"/>
        <source>Error</source>
        <translation>Ошибка</translation>
    </message>
    <message>
        <location line="-209"/>
        <source>Cannot use that file as audio track</source>
        <translation>Невозможно использовать файл как аудиодорожку</translation>
    </message>
    <message>
        <location line="+209"/>
        <source>Some tracks are used multiple times</source>
        <translation>Некоторые дорожки использованы несколько раз</translation>
    </message>
    <message>
        <location line="+163"/>
        <source>Track </source>
        <translation>Дорожка </translation>
    </message>
    <message>
        <location line="+0"/>
        <source> from video</source>
        <translation> из видео</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>File </source>
        <translation>Файл </translation>
    </message>
    <message>
        <location line="+35"/>
        <source>.... Add audio track</source>
        <translation>.... Добавить аудиодорожку</translation>
    </message>
    <message>
        <location line="-83"/>
        <source>copy</source>
        <translation>копировать</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_audioTracks.h" line="+31"/>
        <source>Track %d</source>
        <translation>Дорожка %d</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Enabled</source>
        <translation>Включена</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Configure</source>
        <translation>Настройки</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Filters</source>
        <translation>Фильтры</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Duplicate first track&apos;s settings</source>
        <translation>Дублировать настройки первой дорожки</translation>
    </message>
</context>
<context>
    <name>qencoding</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_encoding.cpp" line="+64"/>
        <source>Privileges Required</source>
        <translation>Требуются права</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Root privileges are required to perform this operation.</source>
        <translation>Для выполнения этой операции требуются права root.</translation>
    </message>
    <message>
        <location line="+149"/>
        <source>First Pass</source>
        <translation>Первый проход</translation>
    </message>
    <message>
        <source>Pass 1</source>
        <translation type="vanished">1 проход</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Second Pass</source>
        <translation>Второй проход</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Encoding...</source>
        <translation>Кодирование...</translation>
    </message>
    <message>
        <location line="+232"/>
        <source>The encoding is paused. Do you want to resume or abort?</source>
        <translation>Процесс кодирования приостановлен. Вы хотите продолжить или прервать его?</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Resume</source>
        <translation>Продолжить</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Abort</source>
        <translation>Прервать</translation>
    </message>
</context>
<context>
    <name>qfile</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/file_qt4.cpp" line="+109"/>
        <location line="+186"/>
        <source>All files (*.*)</source>
        <translation>Все файлы (*.*)</translation>
    </message>
    <message>
        <location line="-90"/>
        <location line="+138"/>
        <source> files (*.</source>
        <translation> файлы (*.</translation>
    </message>
    <message>
        <location line="-92"/>
        <source>Overwrite file &quot;%s&quot;?</source>
        <translation>Перезаписать файл «%s»?</translation>
    </message>
</context>
<context>
    <name>qgui2</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2.cpp" line="+292"/>
        <source>&lt;b&gt;New version available&lt;/b&gt;&lt;br&gt; Version %1&lt;br&gt;Released on %2.&lt;br&gt;You can download it here&lt;br&gt; &lt;a href=&apos;%3&apos;&gt;%3&lt;/a&gt;&lt;br&gt;&lt;br&gt;&lt;small&gt; You can disable autoupdate in preferences.&lt;/small&gt;</source>
        <translation>&lt;b&gt;Новая версия&lt;/b&gt;&lt;br&gt;Версия %1&lt;br&gt;Выпущена %2.&lt;br&gt;Доступна для загрузки с адреса&lt;br&gt;&lt;a href=&apos;%3&apos;&gt;%3&lt;/a&gt;&lt;br&gt;&lt;br&gt;&lt;small&gt;Вы можете отключить автоматическую проверку обновлений в настройках.&lt;/small&gt;</translation>
    </message>
    <message>
        <location line="+515"/>
        <source>Recent Files</source>
        <translation>Недавние файлы</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Recent Projects</source>
        <translation>Недавние проекты</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Restore defaults</source>
        <translation>Восстановить стандартный набор</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Default theme</source>
        <translation>Стандартная тема</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Light theme</source>
        <translation>Светлая тема</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Dark theme</source>
        <translation>Тёмная тема</translation>
    </message>
    <message>
        <location line="+661"/>
        <source>?</source>
        <translation>?</translation>
    </message>
    <message>
        <location line="+253"/>
        <source>Play/Stop</source>
        <translation>Старт/стоп</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Go to previous frame</source>
        <translation>Предыдущий кадр</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Go to next frame</source>
        <translation>Следующий кадр</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Go to previous keyframe</source>
        <translation>Предыдущий ключевой кадр</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Go to next keyframe</source>
        <translation>Следующий ключевой кадр</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Delete selection</source>
        <translation>Удалить выборку</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Set start marker</source>
        <translation>Поставить метку A</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Set end marker</source>
        <translation>Поставить метку B</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Go to previous cut point</source>
        <translation>Перейти к предыдущему разрезу</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Go to next cut point</source>
        <translation>Перейти к следующему разрезу</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Go to first frame</source>
        <translation>Первый кадр</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Go to last frame</source>
        <translation>Последний кадр</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Go to marker A</source>
        <translation>Перейти к метке A</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Go to marker B</source>
        <translation>Перейти к метке B</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Backward one minute</source>
        <translation>Назад на 1 минуту</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Forward one minute</source>
        <translation>Вперёд на 1 минуту</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Backward 1 second</source>
        <translation>Назад на 1 секунду</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Forward 1 second</source>
        <translation>Вперёд на 1 секунду</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Backward 2 seconds</source>
        <translation>Назад на 2 секунды</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Forward 2 seconds</source>
        <translation>Вперёд на 2 секунды</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Backward 4 seconds</source>
        <translation>Назад на 4 секунды</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Forward 4 seconds</source>
        <translation>Вперёд на 4 секунды</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Rotate mouse wheel to switch mode</source>
        <translation>Прокрутите колесо мыши для переключения режима</translation>
    </message>
    <message>
        <location line="+885"/>
        <source>Input: %1x%2, %3fps  |  Decoder: %4  |  Display: %5  |  Zoom: %6%</source>
        <translation>Вход: %1x%2, %3 к/c  |  Декодер: %4  |  Вывод: %5  |  Масштаб: %6%</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>No file loaded</source>
        <translation>Файл не загружен</translation>
    </message>
    <message>
        <location line="+1118"/>
        <source>INFO: %1</source>
        <translation>ИНФОРМАЦИЯ: %1</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>WARNING: %1</source>
        <translation>ПРЕДУПРЕЖДЕНИЕ: %1</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>ERROR: %1</source>
        <translation>ОШИБКА: %1</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>WARNING: Video is late by %1 ms</source>
        <translation>ПРЕДУПРЕЖДЕНИЕ: Видео отстаёт на %1 мс</translation>
    </message>
    <message>
        <source>Zoom: </source>
        <translation type="vanished">Масштаб: </translation>
    </message>
    <message>
        <location line="-760"/>
        <source>The application has encountered a fatal problem
The current editing has been saved and will be reloaded at next start</source>
        <translation>Приложение столкнулось с критической проблемой
Ход текущего редактирования сохранён и будет загружен при следующем запуске</translation>
    </message>
    <message>
        <location line="+287"/>
        <source>%c-%s</source>
        <translation>%c-%s</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>%c-%s (%02d)</source>
        <translation>%c-%s (%02d)</translation>
    </message>
    <message>
        <location line="+76"/>
        <source>Selection: </source>
        <translation>Выборка: </translation>
    </message>
    <message numerus="yes">
        <location line="+357"/>
        <location line="+2"/>
        <source> (%n track(s))</source>
        <translation>
            <numerusform> (%n дорожка)</numerusform>
            <numerusform> (%n дорожки)</numerusform>
            <numerusform> (%n дорожек)</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>qgui2menu</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/Q_gui2_menu.cpp" line="+52"/>
        <source>Project Script</source>
        <translation>Скрипт проекта</translation>
    </message>
    <message>
        <location line="+4"/>
        <source> Project</source>
        <translation> Проект</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>&amp;Run Project...</source>
        <translation>&amp;Запустить проект...</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>&amp;Debug Project...</source>
        <translation>&amp;Отладить проект...</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Save &amp;As Project...</source>
        <translation>Сохранить &amp;как проект...</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Scripting Shell</source>
        <translation>Командная строка скриптов</translation>
    </message>
    <message>
        <location line="+4"/>
        <source> Shell</source>
        <translation> Командная строка</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Script Shortcuts</source>
        <translation>Горячие клавиши для скриптов пользователя</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Scripting Reference</source>
        <translation>Сноска скрипта</translation>
    </message>
    <message>
        <location line="+4"/>
        <source> Reference</source>
        <translation> Сноска</translation>
    </message>
    <message>
        <location line="+243"/>
        <source>Restore previous session</source>
        <translation>Восстановить прошлую сессию</translation>
    </message>
</context>
<context>
    <name>qjobs</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_jobs.cpp" line="+13"/>
        <source>Ready</source>
        <translation>Готово</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Succeeded</source>
        <translation>Выполнено</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Failed</source>
        <translation>Ошибка</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Deleted</source>
        <translation>Удалено</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Running</source>
        <translation>Выполняется</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Job Name</source>
        <translation>Имя задания</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Status</source>
        <translation>Статус</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Start Time</source>
        <translation>Начальное время</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>End Time</source>
        <translation>Конечное время</translation>
    </message>
    <message>
        <location line="+64"/>
        <location line="+15"/>
        <source>Sure!</source>
        <translation>Да!</translation>
    </message>
    <message>
        <location line="-15"/>
        <source>Delete job</source>
        <translation>Удалить задание</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Are you sure you want to delete %s job?</source>
        <translation>Вы уверены, что хотите удалить задание %s?</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Delete *all* job</source>
        <translation>Удалить *все* задания</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Are you sure you want to delete ALL jobs?</source>
        <translation>Вы уверены, что хотите удалить ВСЕ задания?</translation>
    </message>
    <message>
        <location line="+25"/>
        <source>Already done</source>
        <translation>Уже сделано</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>This script has already been successfully executed.</source>
        <translation>Этот скрипт уже был выполнен.</translation>
    </message>
</context>
<context>
    <name>qlicense</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_license.cpp" line="+25"/>
        <source>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot;&gt;&lt;html&gt;&lt;head&gt;  &lt;title&gt;Avidemux is free software; you can redistribute it and/or  modify it under the terms of the GNU General Public License  version 2 as published by the Free Software Foundation&lt;/title&gt;&lt;style type=&quot;text/css&quot;&gt;&lt;!-- /* Style Definitions */ p.licenseStyle, li.licenseStyle, div.licenseStyle        {margin:0cm;        margin-bottom:.0001pt;        font-size:12.0pt;        font-family:&quot;Times New Roman&quot;;} /* Page Definitions */ @page Section1        {size:612.0pt 792.0pt;        margin:72.0pt 90.0pt 72.0pt 90.0pt;}div.Section1        {page:Section1;}--&gt;&lt;/style&gt;&lt;/head&gt;&lt;body lang=&quot;EN-GB&quot; style=&apos;text-justify-trim:punctuation&apos;&gt;  &lt;div class=&quot;Section1&quot;&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt;Avidemux is    free software; you can redistribute it and/or modify it under    the terms of the GNU General Public License version 2 as    published by the Free Software Foundation.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;b&gt;&lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt;    &lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;GNU GENERAL PUBLIC    LICENSE&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Version 2, June    1991&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Copyright (C) 1989, 1991    Free Software Foundation, Inc.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;span lang=&quot;FR&quot; style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;59 Temple Place, Suite    330, Boston, MA  02111-1307  USA&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;span lang=&quot;FR&quot; style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Everyone is permitted to    copy and distribute verbatim copies of this license document,    but changing it is not allowed.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Preamble&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;The licenses for most    software are designed to take away your freedom to share and    change it.  By contrast, the GNU General Public License is    intended to guarantee your freedom to share and change free    software--to make sure the software is free for all its users.     This General Public License applies to most of the Free    Software Foundation&apos;s software and to any other program whose    authors commit to using it.  (Some other Free Software    Foundation software is covered by the GNU Library General    Public License instead.)  You can apply it to your programs,    too.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;When we speak of free    software, we are referring to freedom, not price.  Our General    Public Licenses are designed to make sure that you have the    freedom to distribute copies of free software (and charge for    this service if you wish), that you receive source code or can    get it if you want it, that you can change the software or use    pieces of it in new free programs; and that you know you can do    these things.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;To protect your rights, we    need to make restrictions that forbid anyone to deny you these    rights or to ask you to surrender the rights. These    restrictions translate to certain responsibilities for you if    you distribute copies of the software, or if you modify    it.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;For example, if you    distribute copies of such a program, whether gratis or for a    fee, you must give the recipients all the rights that you have.     You must make sure that they, too, receive or can get the    source code.  And you must show them these terms so they know    their rights.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;We protect your rights    with two steps: (1) copyright the software, and (2) offer you    this license which gives you legal permission to copy,    distribute and/or modify the software.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Also, for each author&apos;s    protection and ours, we want to make certain that everyone    understands that there is no warranty for this free software.     If the software is modified by someone else and passed on, we    want its recipients to know that what they have is not the    original, so that any problems introduced by others will not    reflect on the original authors&apos; reputations.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Finally, any free program    is threatened constantly by software patents.  We wish to avoid    the danger that redistributors of a free program will    individually obtain patent licenses, in effect making the    program proprietary.  To prevent this, we have made it clear    that any patent must be licensed for everyone&apos;s free use or not    licensed at all.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;The precise terms and    conditions for copying, distribution and modification    follow.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;GNU GENERAL PUBLIC    LICENSE&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;TERMS AND CONDITIONS FOR    COPYING, DISTRIBUTION AND MODIFICATION&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;0. This License applies to    any program or other work which contains a notice placed by the    copyright holder saying it may be distributed under the terms    of this General Public License.  The &quot;Program&quot;, below, refers    to any such program or work, and a &quot;work based on the Program&quot;    means either the Program or any derivative work under copyright    law: that is to say, a work containing the Program or a portion    of it, either verbatim or with modifications and/or translated    into another language.  (Hereinafter, translation is included    without limitation in the term &quot;modification&quot;.)  Each licensee    is addressed as &quot;you&quot;.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Activities other than    copying, distribution and modification are not covered by this    License; they are outside its scope.  The act of running the    Program is not restricted, and the output from the Program is    covered only if its contents constitute a work based on the    Program (independent of having been made by running the    Program). Whether that is true depends on what the Program    does.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;1. You may copy and    distribute verbatim copies of the Program&apos;s source code as you    receive it, in any medium, provided that you conspicuously and    appropriately publish on each copy an appropriate copyright    notice and disclaimer of warranty; keep intact all the notices    that refer to this License and to the absence of any warranty;    and give any other recipients of the Program a copy of this    License along with the Program.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;You may charge a fee for    the physical act of transferring a copy, and you may at your    option offer warranty protection in exchange for a    fee.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;2. You may modify your    copy or copies of the Program or any portion of it, thus    forming a work based on the Program, and copy and distribute    such modifications or work under the terms of Section 1 above,    provided that you also meet all of these conditions:&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;a) You must cause the    modified files to carry prominent notices stating that you    changed the files and the date of any change.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;b) You must cause any work    that you distribute or publish, that in whole or in part    contains or is derived from the Program or any part thereof, to    be licensed as a whole at no charge to all third parties under    the terms of this License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;c) If the modified program    normally reads commands interactively when run, you must cause    it, when started running for such interactive use in the most    ordinary way, to print or display an announcement including an    appropriate copyright notice and a notice that there is no    warranty (or else, saying that you provide a warranty) and that    users may redistribute the program under these conditions, and    telling the user how to view a copy of this License.     (Exception: if the Program itself is interactive but does not    normally print such an announcement, your work based on the    Program is not required to print an announcement.)&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;These requirements apply    to the modified work as a whole.  If identifiable sections of    that work are not derived from the Program, and can be    reasonably considered independent and separate works in    themselves, then this License, and its terms, do not apply to    those sections when you distribute them as separate works.  But    when you distribute the same sections as part of a whole which    is a work based on the Program, the distribution of the whole    must be on the terms of this License, whose permissions for    other licensees extend to the entire whole, and thus to each    and every part regardless of who wrote it.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Thus, it is not the intent    of this section to claim rights or contest your rights to work    written entirely by you; rather, the intent is to exercise the    right to control the distribution of derivative or collective    works based on the Program.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;In addition, mere    aggregation of another work not based on the Program with the    Program (or with a work based on the Program) on a volume of a    storage or distribution medium does not bring the other work    under the scope of this License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;3. You may copy and    distribute the Program (or a work based on it, under Section 2)    in object code or executable form under the terms of Sections 1    and 2 above provided that you also do one of the    following:&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;a) Accompany it with the    complete corresponding machine-readable source code, which must    be distributed under the terms of Sections 1 and 2 above on a    medium customarily used for software interchange;    or,&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;b) Accompany it with a    written offer, valid for at least three years, to give any    third party, for a charge no more than your cost of physically    performing source distribution, a complete machine-readable    copy of the corresponding source code, to be distributed under    the terms of Sections 1 and 2 above on a medium customarily    used for software interchange; or,&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;c) Accompany it with the    information you received as to the offer to distribute    corresponding source code.  (This alternative is allowed only    for noncommercial distribution and only if you received the    program in object code or executable form with such an offer,    in accord with Subsection b above.)&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;The source code for a work    means the preferred form of the work for making modifications    to it.  For an executable work, complete source code means all    the source code for all modules it contains, plus any    associated interface definition files, plus the scripts used to    control compilation and installation of the executable.     However, as a special exception, the source code distributed    need not include anything that is normally distributed (in    either source or binary form) with the major components    (compiler, kernel, and so on) of the operating system on which    the executable runs, unless that component itself accompanies    the executable.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;If distribution of    executable or object code is made by offering access to copy    from a designated place, then offering equivalent access to    copy the source code from the same place counts as distribution    of the source code, even though third parties are not compelled    to copy the source along with the object code.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;4. You may not copy,    modify, sublicense, or distribute the Program except as    expressly provided under this License.  Any attempt otherwise    to copy, modify, sublicense or distribute the Program is void,    and will automatically terminate your rights under this    License. However, parties who have received copies, or rights,    from you under this License will not have their licenses    terminated so long as such parties remain in full    compliance.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;5. You are not required to    accept this License, since you have not signed it.  However,    nothing else grants you permission to modify or distribute the    Program or its derivative works.  These actions are prohibited    by law if you do not accept this License.  Therefore, by    modifying or distributing the Program (or any work based on the    Program), you indicate your acceptance of this License to do    so, and all its terms and conditions for copying, distributing    or modifying the Program or works based on it.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;6. Each time you    redistribute the Program (or any work based on the Program),    the recipient automatically receives a license from the    original licensor to copy, distribute or modify the Program    subject to these terms and conditions.  You may not impose any    further restrictions on the recipients&apos; exercise of the rights    granted herein. You are not responsible for enforcing    compliance by third parties to this License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;7. If, as a consequence of    a court judgment or allegation of patent infringement or for    any other reason (not limited to patent issues), conditions are    imposed on you (whether by court order, agreement or otherwise)    that contradict the conditions of this License, they do not    excuse you from the conditions of this License.  If you cannot    distribute so as to satisfy simultaneously your obligations    under this License and any other pertinent obligations, then as    a consequence you may not distribute the Program at all.  For    example, if a patent license would not permit royalty-free    redistribution of the Program by all those who receive copies    directly or indirectly through you, then the only way you could    satisfy both it and this License would be to refrain entirely    from distribution of the Program.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;If any portion of this    section is held invalid or unenforceable under any particular    circumstance, the balance of the section is intended to apply    and the section as a whole is intended to apply in other    circumstances.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;It is not the purpose of    this section to induce you to infringe any patents or other    property right claims or to contest validity of any such    claims; this section has the sole purpose of protecting the    integrity of the free software distribution system, which is    implemented by public license practices.  Many people have made    generous contributions to the wide range of software    distributed through that system in reliance on consistent    application of that system; it is up to the author/donor to    decide if he or she is willing to distribute software through    any other system and a licensee cannot impose that    choice.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;This section is intended    to make thoroughly clear what is believed to be a consequence    of the rest of this License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;8. If the distribution    and/or use of the Program is restricted in certain countries    either by patents or by copyrighted interfaces, the original    copyright holder who places the Program under this License may    add an explicit geographical distribution limitation excluding    those countries, so that distribution is permitted only in or    among countries not thus excluded.  In such case, this License    incorporates the limitation as if written in the body of this    License.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;9. The Free Software    Foundation may publish revised and/or new versions of the    General Public License from time to time.  Such new versions    will be similar in spirit to the present version, but may    differ in detail to address new problems or    concerns.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;Each version is given a    distinguishing version number.  If the Program specifies a    version number of this License which applies to it and &quot;any    later version&quot;, you have the option of following the terms and    conditions either of that version or of any later version    published by the Free Software Foundation.  If the Program does    not specify a version number of this License, you may choose    any version ever published by the Free Software    Foundation.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;10. If you wish to    incorporate parts of the Program into other free programs whose    distribution conditions are different, write to the author to    ask for permission.  For software which is copyrighted by the    Free Software Foundation, write to the Free Software    Foundation; we sometimes make exceptions for this.  Our    decision will be guided by the two goals of preserving the free    status of all derivatives of our free software and of promoting    the sharing and reuse of software generally.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;NO WARRANTY&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;11. BECAUSE THE PROGRAM IS    LICENSED FREE OF CHARGE, THERE IS NO WARRANTY FOR THE PROGRAM,    TO THE EXTENT PERMITTED BY APPLICABLE LAW.  EXCEPT WHEN    OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER    PARTIES PROVIDE THE PROGRAM &quot;AS IS&quot; WITHOUT WARRANTY OF ANY    KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED    TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A    PARTICULAR PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND    PERFORMANCE OF THE PROGRAM IS WITH YOU.  SHOULD THE PROGRAM    PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY    SERVICING, REPAIR OR CORRECTION.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=    &apos;text-align:justify;text-autospace:none&apos;&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;12. IN NO EVENT UNLESS    REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY    COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MAY MODIFY AND/OR    REDISTRIBUTE THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU    FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR    CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO    USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR    DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR    THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY    OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN    ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.&lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; align=&quot;center&quot; style=    &apos;text-align:center;text-autospace:none&apos;&gt;&lt;b&gt;&lt;span style=    &apos;font-size:10.0pt;font-family:Arial&apos;&gt;END OF TERMS AND    CONDITIONS&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;    &lt;p class=&quot;licenseStyle&quot; style=&apos;text-autospace:none&apos;&gt;    &lt;span style=&apos;font-size:10.0pt; font-family:Arial&apos;&gt; &lt;/span&gt;&lt;/p&gt;  &lt;/div&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>qmainfilter</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/Q_mainfilter.cpp" line="+504"/>
        <location line="+30"/>
        <source>Partial</source>
        <translation>Частичное наложение</translation>
    </message>
    <message>
        <location line="-29"/>
        <source>This filter cannot be made partial</source>
        <translation>Этот фильтр нельзя применить только к части видео</translation>
    </message>
    <message>
        <location line="+347"/>
        <location line="+444"/>
        <source>Add</source>
        <translation>Добавить</translation>
    </message>
    <message>
        <location line="-596"/>
        <location line="+157"/>
        <source>Remove</source>
        <translation>Удалить</translation>
    </message>
    <message>
        <location line="-159"/>
        <source>Configure</source>
        <translation>Настройки</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>Move up</source>
        <translation>Переместить вверх</translation>
    </message>
    <message>
        <location line="-404"/>
        <source>Preview</source>
        <translation>Предпросмотр</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>DISABLED </source>
        <translation>ОТКЛЮЧЕНО </translation>
    </message>
    <message>
        <location line="+240"/>
        <source>This filter is not partial</source>
        <translation>Этот фильтр не применим к части видео</translation>
    </message>
    <message>
        <location line="+162"/>
        <source>Move down</source>
        <translation>Переместить вниз</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Duplicate</source>
        <translation>Дублировать</translation>
    </message>
    <message>
        <location line="+2"/>
        <location line="+78"/>
        <source>Make partial</source>
        <translation>Сделать частичным</translation>
    </message>
    <message>
        <location line="-77"/>
        <source>Enable/Disable</source>
        <translation>Включить / отключить</translation>
    </message>
    <message>
        <location line="+73"/>
        <source>Disable</source>
        <translation>Отключить</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable</source>
        <translation>Включить</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Make global</source>
        <translation>Сделать глобальным</translation>
    </message>
    <message>
        <location line="+149"/>
        <source>Press %s to accept the dialog</source>
        <translation>Применить конфигурацию и закрыть диалог: %s</translation>
    </message>
    <message>
        <location line="+149"/>
        <source>Load video filters..</source>
        <translation>Загрузить фильтры видео…</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Save video filters..</source>
        <translation>Сохранить фильтры видео…</translation>
    </message>
    <message>
        <location line="+340"/>
        <source>Can not add partial filter</source>
        <translation>Невозможно добавить частичный фильтр</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>A selection by markers has to be made.</source>
        <translation>Необходимо создать выборку с помощью меток.</translation>
    </message>
</context>
<context>
    <name>qprocessing</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_processing.cpp" line="+69"/>
        <source>Unknown</source>
        <translation>Неизвестно</translation>
    </message>
    <message>
        <source>_Resume</source>
        <translation type="vanished">_Продолжить</translation>
    </message>
    <message>
        <location line="+96"/>
        <source>_Cancel Processing</source>
        <translation>Отменить по_стобработку</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The processing is paused.</source>
        <translation>Процесс приостановлен.</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Cancel it ?</source>
        <translation>Отменить дальнейшую обработку?</translation>
    </message>
</context>
<context>
    <name>qprops</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_props.cpp" line="+26"/>
        <source>No</source>
        <translation>Нет</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Yes</source>
        <translation>Да</translation>
    </message>
    <message>
        <location line="+41"/>
        <location line="+171"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <source>n/a</source>
        <translation>н/д</translation>
    </message>
    <message>
        <location line="-171"/>
        <source>%d kbps</source>
        <translation>%d кбит/c</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>RGB, 8-bit</source>
        <translation>RGB, 8 бит</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Planar RGB, 8-bit</source>
        <translation>Planar RGB, 8 бит</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>RGBA, 8-bit</source>
        <translation>RGBA, 8 бит</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>RGB, 5-bit</source>
        <translation>RGB, 5 бит</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:2:0, 8-bit</source>
        <translation>YUV 4:2:0, 8 бит</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:2:0 (NV12), 8-bit</source>
        <translation>YUV 4:2:0 (NV12), 8 бит</translation>
    </message>
    <message>
        <location line="+2"/>
        <location line="+2"/>
        <source>Packed YUV 4:2:2, 8-bit</source>
        <translation>Packed YUV 4:2:2, 8 бит</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:2:2, 8-bit</source>
        <translation>YUV 4:2:2, 8 бит</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:1:1, 8-bit</source>
        <translation>YUV 4:1:1, 8 бит</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:4:4, 8-bit</source>
        <translation>YUV 4:4:4, 8 бит</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Grayscale Y, 8-bit</source>
        <translation>Grayscale Y, 8 бит</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:4:4, 10-bit</source>
        <translation>YUV 4:4:4, 10 бит</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:2:0 (P010), 10-bit</source>
        <translation>YUV 4:2:0 (P010), 10 бит</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:2:0, 10-bit</source>
        <translation>YUV 4:2:0, 10 бит</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:2:0, 12-bit</source>
        <translation>YUV 4:2:0, 12 бит</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:2:2, 10-bit</source>
        <translation>YUV 4:2:2, 10 бит</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>YUV 4:4:4, 12-bit</source>
        <translation>YUV 4:4:4, 12 бит</translation>
    </message>
    <message>
        <location line="+2"/>
        <location line="+9"/>
        <location line="+26"/>
        <location line="+37"/>
        <location line="+31"/>
        <source>Unknown</source>
        <translation>Неизвестный</translation>
    </message>
    <message>
        <location line="-98"/>
        <source>Limited (MPEG)</source>
        <translation>Ограниченный (MPEG)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Full (JPEG)</source>
        <translation>Полный (JPEG)</translation>
    </message>
    <message>
        <location line="+7"/>
        <location line="+26"/>
        <location line="+39"/>
        <source>BT.709</source>
        <translation>BT.709</translation>
    </message>
    <message>
        <location line="-63"/>
        <location line="+26"/>
        <source>BT.470 System M</source>
        <translation>BT.470 System M</translation>
    </message>
    <message>
        <location line="-24"/>
        <source>BT.601 PAL</source>
        <translation>BT.601 PAL</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>BT.601 NTSC</source>
        <translation>BT.601 NTSC</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Generic film</source>
        <translation>Generic film</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>BT.2020</source>
        <translation>BT.2020</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>XYZ</source>
        <translation>XYZ</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>DCI P3</source>
        <translation>DCI P3</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Display P3</source>
        <translation>Display P3</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>EBU Tech. 3213</source>
        <translation>EBU Tech. 3213</translation>
    </message>
    <message>
        <location line="+11"/>
        <location line="+39"/>
        <source>BT.470 System B/G</source>
        <translation>BT.470 System B/G</translation>
    </message>
    <message>
        <location line="-37"/>
        <location line="+39"/>
        <source>BT.601</source>
        <translation>BT.601</translation>
    </message>
    <message>
        <location line="-37"/>
        <location line="+39"/>
        <source>SMPTE 240M</source>
        <translation>SMPTE 240M</translation>
    </message>
    <message>
        <location line="-37"/>
        <source>Linear</source>
        <translation>Линейный</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Logarithmic (100:1)</source>
        <translation>Логарифмический (100:1)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Logarithmic (316.227:1)</source>
        <translation>Логарифмический (316.227:1)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>xvYCC</source>
        <translation>xvYCC</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>BT.1361</source>
        <translation>BT.1361</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>sRGB/sYCC</source>
        <translation>sRGB/sYCC</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>BT.2020 (10-bit)</source>
        <translation>BT.2020 (10 бит)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>BT.2020 (12-bit)</source>
        <translation>BT.2020 (12 бит)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>PQ</source>
        <translation>PQ</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>SMPTE 428M</source>
        <translation>SMPTE 428M</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>HLG</source>
        <translation>HLG</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>sRGB</source>
        <translation>sRGB</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>FCC 73.682</source>
        <translation>FCC 73.682</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>YCgCo</source>
        <translation>YCgCo</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>BT.2020 non-constant</source>
        <translation>BT.2020 non-constant</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>BT.2020 constant</source>
        <translation>BT.2020 constant</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Y&apos;D&apos;zD&apos;x</source>
        <translation>Y&apos;D&apos;zD&apos;x</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Chromaticity-derived non-constant</source>
        <translation>Непостоянная, полученная из цветности</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Chromaticity-derived constant</source>
        <translation>Постоянная, полученная из цветности</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>ICtCp</source>
        <translation>ICtCp</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>(+%d bytes)</source>
        <translation>(+%d байт)</translation>
    </message>
    <message numerus="yes">
        <location line="+24"/>
        <location line="+2"/>
        <source>Audio (%n active track(s))</source>
        <translation>
            <numerusform>Аудио (%n активная дорожка)</numerusform>
            <numerusform>Аудио (%n активные дорожки)</numerusform>
            <numerusform>Аудио (%n активных дорожек)</numerusform>
        </translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Mono</source>
        <translation>Моно</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Stereo</source>
        <translation>Стерео</translation>
    </message>
    <message>
        <source>Video</source>
        <translation type="vanished">Видео</translation>
    </message>
    <message>
        <source>Codec 4CC:	</source>
        <translation type="vanished">Кодек 4CC:	</translation>
    </message>
    <message>
        <source>Image Size:	</source>
        <translation type="vanished">Размер картинки:</translation>
    </message>
    <message>
        <source>Aspect Ratio:	</source>
        <translation type="vanished">Соотношение сторон:</translation>
    </message>
    <message>
        <source>Frame Rate:	</source>
        <translation type="vanished">Частота выборки:</translation>
    </message>
    <message>
        <source>Total Duration:	</source>
        <translation type="vanished">Общая длительность:</translation>
    </message>
    <message>
        <source>Extra Video Properties</source>
        <translation type="vanished">Дополнительные свойства видео</translation>
    </message>
    <message>
        <source>ExtraDataSize:	</source>
        <translation type="vanished">Размер дополнительных данных:</translation>
    </message>
    <message>
        <source>Extra data:	</source>
        <translation type="vanished">Дополнительные данные:</translation>
    </message>
    <message>
        <source>Audio</source>
        <translation type="vanished">Звук</translation>
    </message>
    <message>
        <source>Codec:		</source>
        <translation type="vanished">Кодек:		</translation>
    </message>
    <message>
        <source>Channels:	</source>
        <translation type="vanished">Каналы:		</translation>
    </message>
    <message>
        <source>Bitrate:	</source>
        <translation type="vanished">Битрейт:	</translation>
    </message>
    <message>
        <source>Frequency:	</source>
        <translation type="vanished">Частота выборки:</translation>
    </message>
    <message>
        <location line="+161"/>
        <source>No Audio</source>
        <translation>Без звука</translation>
    </message>
    <message>
        <location line="-429"/>
        <source>%2.3f fps</source>
        <translation>%2.3f к/с</translation>
    </message>
    <message>
        <location line="+13"/>
        <location line="+269"/>
        <source>%02d:%02d:%02d.%03d</source>
        <translation>%02d:%02d:%02d,%03d</translation>
    </message>
    <message>
        <location line="-284"/>
        <source>%s (%u:%u)</source>
        <translation>%s (%u:%u)</translation>
    </message>
</context>
<context>
    <name>qscriptshortcutconfig</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_scriptShortcutConfig.cpp" line="+45"/>
        <source>clear</source>
        <translation>очистить</translation>
    </message>
</context>
<context>
    <name>qshell</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_shell/Q_shell.cpp" line="+63"/>
        <source>Enter your commands then press the evaluate button or CTRL+ENTER.
</source>
        <translation>Введите команды и нажмите кнопку «Выполнить» или CTRL+ENTER.
</translation>
    </message>
    <message>
        <location line="+1"/>
        <location line="+4"/>
        <source>Enter help() for more information.
</source>
        <translation>Введите «help()» для подробностей.
</translation>
    </message>
    <message>
        <location line="-3"/>
        <source>You can use CTRL+PageUP and CTRL+Page Down to recall previous commands
Ready.
</source>
        <translation>Вы можете использовать CTRL+Page Up и CTRL+Page Down для вызова предыдущих команд.
Готов.
</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Enter your commands then press the evaluate button or ⌘⏎.
</source>
        <translation>Введите команды и нажмите кнопку «Выполнить» или ⌘⏎.
</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>You can use ⌥⌘▲ and ⌥⌘▼ to recall previous commands.
Ready.
</source>
        <translation>Вы можете использовать ⌥⌘▲ и ⌥⌘▼ для вызова предыдущих команд.
Готовность.
</translation>
    </message>
</context>
<context>
    <name>qtalert</name>
    <message>
        <source>Alert</source>
        <translation type="vanished">Оповещение</translation>
    </message>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/alert_qt4.cpp" line="+126"/>
        <source>Info</source>
        <translation>Информация</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Error</source>
        <translation>Ошибка</translation>
    </message>
    <message>
        <location line="+21"/>
        <location line="+29"/>
        <source>Confirmation</source>
        <translation>Подтверждение</translation>
    </message>
    <message>
        <location line="+25"/>
        <location line="+34"/>
        <source>Question</source>
        <translation>Вопрос</translation>
    </message>
    <message>
        <location line="-8"/>
        <source>Question?</source>
        <translation>Вопрос?</translation>
    </message>
</context>
<context>
    <name>qtray</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_gui/ADM_qtray.cpp" line="+82"/>
        <source>Open Avidemux</source>
        <translation>Открыть Avidemux</translation>
    </message>
</context>
<context>
    <name>quadTrans</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/quadTrans/ADM_vidQuadTrans.cpp" line="+42"/>
        <source>Quadrilateral transformation</source>
        <translation>Четырёхугольное преобразование</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Four point transform.</source>
        <translation>Четырёхточечное преобразование.</translation>
    </message>
</context>
<context>
    <name>quadTransDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/quadTrans/qt4/quadTrans.ui" line="+14"/>
        <source>Quadrilateral transformation</source>
        <translation>Четырёхугольное преобразование</translation>
    </message>
    <message>
        <location line="+53"/>
        <source>Bilinear</source>
        <translation>Билинейная</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Bicubic</source>
        <translation>Бикубическая</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Interpolation:</source>
        <translation>Интерполяция:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Zoom:</source>
        <translation>Масштаб:</translation>
    </message>
    <message>
        <location line="+34"/>
        <location line="+27"/>
        <location line="+74"/>
        <location line="+34"/>
        <source>Δy:</source>
        <translation>Δy:</translation>
    </message>
    <message>
        <location line="-115"/>
        <location line="+14"/>
        <location line="+50"/>
        <location line="+34"/>
        <source>Δx:</source>
        <translation>Δx:</translation>
    </message>
</context>
<context>
    <name>quickFilterDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/quickfilter.ui" line="+20"/>
        <source>Add Partial Video Filter</source>
        <translation>Добавить частичный видеофильтр</translation>
    </message>
    <message>
        <location line="+44"/>
        <source>&lt;big&gt;&lt;b&gt;Available Filters&lt;/b&gt;&lt;/big&gt;</source>
        <translation>&lt;big&gt;&lt;b&gt;Доступные фильтры&lt;/b&gt;&lt;/big&gt;</translation>
    </message>
    <message>
        <location line="+64"/>
        <source>Type to narrow the list</source>
        <translation>Начните писать, чтобы сузить список</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>&amp;Close</source>
        <translation>&amp;Закрыть</translation>
    </message>
</context>
<context>
    <name>qvobsub</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/Q_vobsub.cpp" line="+88"/>
        <source>Select Idx File</source>
        <translation>Выбрать файл IDX</translation>
    </message>
</context>
<context>
    <name>rawmuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerRaw/muxerRawConfig.cpp" line="+40"/>
        <source>Prefer Annex B type stream</source>
        <translation>Предпочитать видеопоток типа Annex B</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Save frames to separate files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Maximum number of digits</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Override filename extension</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Video Only Muxer Settings</source>
        <translation>Настройки мультиплексора только для видео</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_muxers/muxerRaw/muxerRaw.cpp" line="+132"/>
        <source>Saving raw video</source>
        <translation>Сохранение чистого видеопотока</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>None</source>
        <translation>Нет</translation>
    </message>
</context>
<context>
    <name>removeplane</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/removePlane/removePlane.cpp" line="+45"/>
        <source>Remove  Plane</source>
        <translation>Удалить плоскость</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Remove Y,U or V plane (used mainly to debug other filters).</source>
        <translation>Удалить плоскость Y, U или V (используется в основном для отладки других фильтров).</translation>
    </message>
    <message>
        <location line="+105"/>
        <source>Keep Y Plane</source>
        <translation>Сохранить плоскость Y</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Process luma plane</source>
        <translation>Обработать плоскость яркости (luma)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Keep U Plane</source>
        <translation>Сохранить плоскость U</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Process chromaU plane</source>
        <translation>Обработать плоскость цветности (chroma) U</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Keep V Plane</source>
        <translation>Сохранить плоскость V</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Process chromaV plane</source>
        <translation>Обработать плоскость цветности (chroma) V</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Remove plane</source>
        <translation>Удалить плоскость</translation>
    </message>
</context>
<context>
    <name>resampleFps</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resampleFps/ADM_vidResampleFPS.cpp" line="+449"/>
        <source>_Mode:</source>
        <translation>_Режим:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_New frame rate:</source>
        <translation>Новая _частота кадров:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Resample fps</source>
        <translation>Преобразовать кадровую частоту</translation>
    </message>
    <message>
        <location line="-413"/>
        <source>Custom</source>
        <translation>Вручную</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>25  (PAL)</source>
        <translation>25  (PAL)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>23.976 (Film)</source>
        <translation>23,976 (Film)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>29.97 (NTSC)</source>
        <translation>29,97 (NTSC)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>50 (Pal)</source>
        <translation>50 (PAL)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>59.94  (NTSC)</source>
        <translation>59,94  (NTSC)</translation>
    </message>
    <message>
        <location line="+37"/>
        <source>Resample FPS</source>
        <translation>Преобразовать кадровую частоту</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Change and enforce FPS. Keep duration and sync.</source>
        <translation>Преобразовать кадровую частоту при сохранении длительности и синхронизации.</translation>
    </message>
    <message>
        <location line="+354"/>
        <source>none</source>
        <translation>нет</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Blend</source>
        <translation>Смешивание</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Motion compensation</source>
        <translation>Компенсация движения</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>_Interpolation:</source>
        <translation>_Интерполяция:</translation>
    </message>
</context>
<context>
    <name>resize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/Q_resize.cpp" line="+118"/>
        <location line="+144"/>
        <source>Preferences</source>
        <translation>Настройки</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Defaults for new filter instances</source>
        <translation>Стандартные значения новых экземпляров фильтра</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Resize method:</source>
        <translation>Метод изменения размера:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Most recently accepted</source>
        <translation>Последний использованный</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bilinear</source>
        <translation>Билинейный</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bicubic</source>
        <translation>Бикубический</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Lanczos-3</source>
        <translation>Ланцош-3</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Spline</source>
        <translation>Сплайн</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Nearest neighbor</source>
        <translation>Ближайший сосед</translation>
    </message>
    <message>
        <location line="+259"/>
        <source>Width and height cannot be odd</source>
        <translation>Ширина и высота не могут быть нечётными</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/swScaleResize.cpp" line="+83"/>
        <source>swsResize</source>
        <translation>swsResize</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>swScale Resizer.</source>
        <translation>Изменить размер с помощью libswscale.</translation>
    </message>
</context>
<context>
    <name>resizeDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/resize/qt4/resizing.ui" line="+14"/>
        <source>Resize</source>
        <translation>Изменить размер</translation>
    </message>
    <message>
        <location line="+66"/>
        <source>Source PAR:</source>
        <translation>PAR на входе:</translation>
    </message>
    <message>
        <location line="+8"/>
        <location line="+32"/>
        <source>1:1 (square pixels)</source>
        <translation>1:1 (квадратные пиксели)</translation>
    </message>
    <message>
        <location line="-8"/>
        <source>Destination PAR:</source>
        <translation>PAR на выходе:</translation>
    </message>
    <message>
        <location line="+463"/>
        <source>Bicubic</source>
        <translation>Бикубический</translation>
    </message>
    <message>
        <location line="-540"/>
        <source>Aspect Ratio</source>
        <translation>Соотношение сторон</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Lock Aspect Ratio</source>
        <translation>Фиксировать соотношение сторон</translation>
    </message>
    <message>
        <source>Source:</source>
        <translation type="obsolete">Источник:</translation>
    </message>
    <message>
        <source>Destination:</source>
        <translation type="obsolete">Приёмник:</translation>
    </message>
    <message>
        <location line="+90"/>
        <source>Resize Dimensions</source>
        <translation>Размеры на выходе</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Width:</source>
        <translation>Ширина:</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Height:</source>
        <translation>Высота:</translation>
    </message>
    <message>
        <location line="+40"/>
        <source>No rounding</source>
        <translation>Не округлять размеры</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Round to the Nearest Multiple of 16</source>
        <translation>Округлять до ближайшего кратного 16</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Round to the Nearest Multiple of 8</source>
        <translation>Округлять до ближайшего кратного 8</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Round to the Nearest Multiple of 4</source>
        <translation>Округлять до ближайшего кратного 4</translation>
    </message>
    <message>
        <location line="+94"/>
        <source>1%</source>
        <translation>1%</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Percent</source>
        <translation>Процент</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>200%</source>
        <translation>200%</translation>
    </message>
    <message>
        <location line="+59"/>
        <source>Error X / Y:</source>
        <translation>Отклонение X / Y:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>0.00 / 0.00</source>
        <translation>0,00 / 0,00</translation>
    </message>
    <message>
        <location line="+33"/>
        <source>0.0000</source>
        <translation>0,0000</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>(00:00)</source>
        <translation>(00:00)</translation>
    </message>
    <message>
        <location line="+47"/>
        <source>Resize Method:</source>
        <translation>Метод изменения размера:</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Bilinear</source>
        <translation>Билинейный</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Lanczos-3</source>
        <translation>Ланцош-3</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Spline</source>
        <translation>Сплайн</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Nearest neighbor</source>
        <translation>Ближайший сосед</translation>
    </message>
</context>
<context>
    <name>rotate</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/rotateSimple/rotate.cpp" line="+52"/>
        <location line="+161"/>
        <source>Rotate</source>
        <translation>Повернуть</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>None</source>
        <translation>Нет</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>90 degrees</source>
        <translation>90 градусов</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>90° clockwise</source>
        <translation>90° по часовой стрелке</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>180 degrees</source>
        <translation>180 градусов</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>270 degrees</source>
        <translation>270 градусов</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>90° contraclockwise</source>
        <translation>90° против часовой стрелки</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Angle:</source>
        <translation>Угол:</translation>
    </message>
    <message>
        <location line="-158"/>
        <source>Rotate the image by 90/180/270 degrees.</source>
        <translation>Повернуть изображение на 90/180/270 градусов.</translation>
    </message>
    <message>
        <source>90°</source>
        <translation type="vanished">90°</translation>
    </message>
    <message>
        <source>180°</source>
        <translation type="vanished">180°</translation>
    </message>
    <message>
        <source>270°</source>
        <translation type="vanished">270°</translation>
    </message>
</context>
<context>
    <name>seekablePreviewDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_filters/seekablePreview.ui" line="+20"/>
        <source>Preview</source>
        <translation>Предпросмотр</translation>
    </message>
    <message>
        <location filename="../ADM_UIs/src/DIA_flyDialog.cpp" line="+167"/>
        <source>Peek Original</source>
        <translation>Просмотр оригинала</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Show unprocessed input</source>
        <translation>Показать необработанный вход</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Back one minute</source>
        <translation>Назад на 1 мин</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>&lt;&lt;</source>
        <translation>&lt;&lt;</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>A</source>
        <translation>A</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Go to the start of the selection</source>
        <translation>Перейти к началу выборки</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>B</source>
        <translation>B</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Go to the end of the selection</source>
        <translation>Перейти к концу выборки</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Play</source>
        <translation>Играть</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Next image</source>
        <translation>Следующий кадр</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>&gt;</source>
        <translation>&gt;</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>&gt;&gt;</source>
        <translation>&gt;&gt;</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Forward one minute</source>
        <translation>Вперёд на 1 мин</translation>
    </message>
</context>
<context>
    <name>separateFields</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fields/ADM_vidSeparateField.cpp" line="+53"/>
        <source>Separate Fields</source>
        <translation>Разделить поля</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Split each image into 2 fields.</source>
        <translation>Разделить каждое изображение на 2 поля.</translation>
    </message>
</context>
<context>
    <name>shaderLoader</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6_openGl/glShaderLoader/shader.cpp" line="-3"/>
        <source>Reload shader</source>
        <translation>Перезагрузить шейдер</translation>
    </message>
</context>
<context>
    <name>sharpen</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/fastConvolution/Sharpen.cpp" line="+27"/>
        <source>Sharpen convolution.</source>
        <translation>Свёртка резкости.</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>3x3 convolution filter :sharpen.</source>
        <translation>Фильтр свёртки 3x3 :sharpen.</translation>
    </message>
</context>
<context>
    <name>stackfield</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/stackField/stackField.cpp" line="+47"/>
        <source>Stack Fields</source>
        <translation>Кладка полей</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Put even lines on top, odd lines at bottom.</source>
        <translation>Расположить чётные линии сверху, нечётные снизу.</translation>
    </message>
</context>
<context>
    <name>stillimage</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/stillimage/stillimage.cpp" line="+68"/>
        <location line="+297"/>
        <source>Still Image</source>
        <translation>Стоп-кадр</translation>
    </message>
    <message>
        <location line="-296"/>
        <source>Duplicate frames for a given duration.</source>
        <translation>Повторять кадр в течение заданного времени.</translation>
    </message>
    <message>
        <location line="+292"/>
        <source>_Start time:</source>
        <translation>_Начало:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Duration:</source>
        <translation>_Длительность:</translation>
    </message>
</context>
<context>
    <name>swapuv</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/swapUV/swapUV.cpp" line="+41"/>
        <source>Swap UV</source>
        <translation>Замена UV</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Swap the U and V planes.</source>
        <translation>Замена плоскостей U и V.</translation>
    </message>
</context>
<context>
    <name>telecide</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide.cpp" line="+45"/>
        <source>Decomb telecide</source>
        <translation>Восстановитель Decomb</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Donald Graft Telecide. Replace ivtc pattern by progressive frames. Video stays at 30 fps.</source>
        <translation>Восстановитель Дональда Графта. Заменить паттерн ivtc прогрессивными кадрами. Частота кадров видео остаётся равной 30.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/telecide/Telecide_utils.cpp" line="+186"/>
        <source>No strategy</source>
        <translation>Без стратегии</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>3:2 pulldown</source>
        <translation>Преобразование 3:2</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>PAL/SECAM</source>
        <translation>PAL/SECAM</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>NTSC converted from PAL</source>
        <translation>NTSC, конвертированный из PAL</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Top</source>
        <translation>Вверх</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bottom</source>
        <translation>Вниз</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Never</source>
        <translation>Никогда</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>If still combed</source>
        <translation>Если «гребень» остался</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Always</source>
        <translation>Всегда</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>None</source>
        <translation>Нет</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>None but compute</source>
        <translation>Нет, но вычислить</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Postproc on best match</source>
        <translation>Постобработка при лучшем совпадении</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Postproc and show zones (debug)</source>
        <translation>Постобработка и медленные зоны (отладка)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Process image (not fields)</source>
        <translation>Обработать изображение (не поля)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Process image (not fields), debug</source>
        <translation>Обработать изображение (не поля), отладка</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>_Strategy:</source>
        <translation>_Стратегия:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Field order:</source>
        <translation>Пор_ядок полей:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Postprocessing:</source>
        <translation>П_остобработка:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Try backward:</source>
        <translation>В обр_атном направлении:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Direct threshold:</source>
        <translation>_Порог прямого направления:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Backward threshold:</source>
        <translation>По_рог для обратного направления:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Noise threshold:</source>
        <translation>Порог _шума:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Postp_rocessing threshold:</source>
        <translation>Порог пос_тобработки:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Use chroma to decide</source>
        <translation>Использовать _цветность (chroma) для определения</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Sho_w info</source>
        <translation>Показать _информацию</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Debu_g</source>
        <translation>От_ладка</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bl_end</source>
        <translation>См_ешивание</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Decomb Telecide</source>
        <translation>Восстановитель Decomb</translation>
    </message>
</context>
<context>
    <name>tiling</name>
    <message>
        <location filename="../ADM_UIs/src/FAC_tiling.cpp" line="+69"/>
        <source>Columns: 1</source>
        <translation>Столбцы: 1</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Rows: 1</source>
        <translation>Строки: 1</translation>
    </message>
</context>
<context>
    <name>timestamp</name>
    <message>
        <location filename="../ADM_UIs/src/T_timeStamp.cpp" line="+198"/>
        <source> h</source>
        <translation> ч</translation>
    </message>
    <message>
        <location line="+1"/>
        <source> m</source>
        <translation> мин</translation>
    </message>
    <message>
        <location line="+1"/>
        <source> s</source>
        <translation> с</translation>
    </message>
</context>
<context>
    <name>tinypy</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_scriptEngines/tinyPy/src/ADM_pyAvidemux.cpp" line="+434"/>
        <source>Save File</source>
        <translation>Сохранить файл</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Open File</source>
        <translation>Открыть файл</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Select Directory</source>
        <translation>Выберите каталог</translation>
    </message>
</context>
<context>
    <name>tsdemuxer</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexH264.cpp" line="+280"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexH265.cpp" line="+352"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexMpeg2.cpp" line="+101"/>
        <source>There are several files with sequential file names. Should they be all loaded ?</source>
        <translation>Обнаружено несколько файлов с последовательными именами. Загрузить их все?</translation>
    </message>
    <message>
        <location line="+12"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexH265.cpp" line="+12"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexMpeg2.cpp" line="+22"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexVC1.cpp" line="+85"/>
        <source>Indexing</source>
        <translation>Индексация</translation>
    </message>
    <message>
        <location line="+161"/>
        <source>Size Change</source>
        <translation>Изменение разрешения</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The size of the video changes at frame %u from %ux%u to %ux%u. This is unsupported, stopping here.</source>
        <translation>Разрешение видео в кадре %u меняется с %ux%u на %ux%u. Это не поддерживается, индексирование прекращено.</translation>
    </message>
    <message>
        <location line="+10"/>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_tsIndexMpeg2.cpp" line="+72"/>
        <source>The size of the video changes at frame %u from %ux%u to %ux%u. This is unsupported and will result in a crash.
Proceed nevertheless?
This warning won&apos;t be shown again for this video.</source>
        <translation>Разрешение видео в кадре %u меняется с %ux%u на %ux%u. Подобное не поддерживается и приведёт к сбою.
Продолжить всё равно?
Это предупреждение больше не будет отображаться для этого видео.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/MpegTS/ADM_ts.cpp" line="+85"/>
        <source>This file&apos;s index has been created with an older version of avidemux.
The file must be re-indexed. Proceed?</source>
        <translation>Этот файл был индексирован более старой версией Avidemux.
Файл необходимо переиндексировать. Продолжить?</translation>
    </message>
</context>
<context>
    <name>twolame</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/twolame/audioencoder_twolame.cpp" line="+205"/>
        <source>_Bitrate:</source>
        <translation>_Битрейт:</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>TwoLame Configuration</source>
        <translation>Настройки TwoLame</translation>
    </message>
</context>
<context>
    <name>uisupport</name>
    <message>
        <location filename="../ADM_userInterfaces/ui_support.cpp" line="+46"/>
        <source>X11</source>
        <translation>X11</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>MS Windows GDI</source>
        <translation>MS Windows GDI</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Mac OS X Quartz 2D</source>
        <translation>Mac OS X Quartz 2D</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Mac OS X QuickDraw</source>
        <translation>Mac OS X QuickDraw</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>OpenGL</source>
        <translation>OpenGL</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>MS Windows Direct3D</source>
        <translation>MS Windows Direct3D</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Default Raster</source>
        <translation>Растр по умолчанию</translation>
    </message>
</context>
<context>
    <name>unstackfield</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/stackField/unstackField.cpp" line="+47"/>
        <source>Unstack Fields</source>
        <translation>Нестековые поля</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Weave top and bottom halves.</source>
        <translation>Сплетение верхних и нижних половин.</translation>
    </message>
</context>
<context>
    <name>utvideo</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/ffUtVideo/ADM_utvideoEncoder.cpp" line="+108"/>
        <source>None</source>
        <translation>Нет</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Left Neighbour</source>
        <translation>Сосед слева</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Median</source>
        <translation>Средний</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Prediction Method:</source>
        <translation>Алгоритм предсказания:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Ut Video Encoder Configuration</source>
        <translation>Настройки кодировщика Ut Video</translation>
    </message>
</context>
<context>
    <name>vaEncH264</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/directVaEnc/libvaencPlugin.cpp" line="+77"/>
        <source>vaH264 Configuration</source>
        <translation>Настройки vaH264</translation>
    </message>
</context>
<context>
    <name>vaH264</name>
    <message>
        <location line="-4"/>
        <source>_IDR Period:</source>
        <translation>_Период IDR:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Bitrate(kbps)</source>
        <translation>_Битрейт (кбит/с)</translation>
    </message>
</context>
<context>
    <name>vaapiDeint</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilterDeint.cpp" line="+121"/>
        <source>VA-API Deinterlacer</source>
        <translation>Деинтерлейсер на основе VA-API</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Deinterlace and optionally resize video using VA-API.</source>
        <translation>Устранить череccтрочность и по выбору изменить размер видео с помощью VA-API.</translation>
    </message>
    <message>
        <location line="+316"/>
        <source>Bob</source>
        <translation>Качение</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Weave</source>
        <translation>Сплетение</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Motion-Adaptive</source>
        <translation>Согласно движению</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Motion-Compensated</source>
        <translation>Компенсация движения</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Top Field First</source>
        <translation>Верхнее поле сначала</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bottom Field First</source>
        <translation>Нижнее поле сначала</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Frame per Frame</source>
        <translation>Кадр за полный кадр</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Double Framerate</source>
        <translation>Удвоить частоту кадров</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>_Mode:</source>
        <translation>_Режим:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Field Order:</source>
        <translation>_Очерёдность полей:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Output:</source>
        <translation>_Выход:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Deinterlacing</source>
        <translation>Деинтерлейсинг</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>_Resize</source>
        <translation>_Изменить размер</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Width:</source>
        <translation>Ширина:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Height:</source>
        <translation>Высота:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Transformation</source>
        <translation>Размеры</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>VA-API Deinterlacer and Resizer</source>
        <translation>Деинтерлейсер и трансформатор размеров для VA-API</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Unsupported Mode</source>
        <translation>Неподдерживаемый режим</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Specified deinterlacing mode %s is not supported, replaced with %s.</source>
        <translation>Затребованный режим устранения чересстрочности %s не поддерживается, заменён на %s.</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>VA-API Setup Error</source>
        <translation>Ошибка в конфигурации VA-API</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Could not setup VA-API, purely passthrough operation.</source>
        <translation>Не удалось настроить VA-API, чисто транзитный режим.</translation>
    </message>
</context>
<context>
    <name>vaapiResize</name>
    <message>
        <source>vaapi: Resize</source>
        <translation type="obsolete">vaapi: Изменить размер</translation>
    </message>
    <message>
        <source>vaapi: Resize image using vaapi.</source>
        <translation type="obsolete">vaapi: Изменить размер изображения с помощью vaapi.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vaapiFilters/ADM_vidVaapiFilter.cpp" line="+58"/>
        <source>VA-API Resize</source>
        <translation>Изменить размер с VA-API</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Resize image using VA-API.</source>
        <translation>Изменить размеры кадра с помощью интерфейса аппаратного ускорения VA-API.</translation>
    </message>
    <message>
        <location line="+129"/>
        <source>Width :</source>
        <translation>Ширина:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Height :</source>
        <translation>Высота:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>mpeg-&gt;PC</source>
        <translation>Исходный материал по стандарту BT.601</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>vaapi</source>
        <translation>Изменить размер: VA-API</translation>
    </message>
</context>
<context>
    <name>vdpaudeint</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vdpauFilters/ADM_vidVdpauFilterDeint.cpp" line="+139"/>
        <source>vdpauDeint</source>
        <translation>Деинтерлейсер на основе VDPAU</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>VDPAU deinterlacer (+resize).</source>
        <translation>Устранить чересстрочность и по выбору изменить размер видео с помощью VDPAU.</translation>
    </message>
    <message>
        <location line="+195"/>
        <source>Keep Top Field</source>
        <translation>Сохранить верхнее поле</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Keep Bottom Field</source>
        <translation>Сохранить нижнее поле</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Double framerate</source>
        <translation>Удвоить частоту кадров</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Top Field First</source>
        <translation>Верхнее поле сначала</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bottom Field First</source>
        <translation>Нижнее поле сначала</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>_Field Order:</source>
        <translation>_Очерёдность полей:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_IVTC</source>
        <translation>_Обратный телесин (IVTC)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Resize</source>
        <translation>_Изменить размер</translation>
    </message>
    <message>
        <location line="-4"/>
        <source>_Deint Mode:</source>
        <translation>_Режим деинтерлейса:</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Width:</source>
        <translation>Ширина:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Height:</source>
        <translation>Высота:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>vdpau</source>
        <translation>Деинтерлейсер на основе VDPAU</translation>
    </message>
</context>
<context>
    <name>vdpresize</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/vdpauFilters/ADM_vidVdpauFilter.cpp" line="+70"/>
        <source>vdpau: Resize</source>
        <translation>Изменить размер на основе VDPAU</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>vdpau: Resize image using vdpau.</source>
        <translation>Изменить размер с помощью VDPAU.</translation>
    </message>
    <message>
        <location line="+129"/>
        <source>Width:</source>
        <translation>Ширина:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Height:</source>
        <translation>Высота:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>vdpau</source>
        <translation>Изменить размер на основе VDPAU</translation>
    </message>
</context>
<context>
    <name>vflip</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/verticalFlip/verticalFlip.cpp" line="+47"/>
        <source>Vertical Flip</source>
        <translation>Вертикальное отражение</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Vertically flip the image.</source>
        <translation>Вертикально отразить изображение.</translation>
    </message>
</context>
<context>
    <name>vobSubDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/vobsub.ui" line="+13"/>
        <source>Subtitle Font Size and Position</source>
        <translation>Размер шрифта и положение субтитров</translation>
    </message>
    <message>
        <location line="+37"/>
        <source>Delay :</source>
        <translation>Задержка:</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Select File</source>
        <translation>Выбрать файл</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Language :</source>
        <translation>Язык:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Idx File :</source>
        <translation>Файл IDX:</translation>
    </message>
</context>
<context>
    <name>vorbis</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_audioEncoders/vorbis/audioencoder_vorbis.cpp" line="+332"/>
        <source>Quality based</source>
        <translation>По качеству</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Mode:</source>
        <translation>_Режим:</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>_Bitrate:</source>
        <translation>_Битрейт:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Quality:</source>
        <translation>_Качество:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Vorbis Configuration</source>
        <translation>Настройки Vorbis</translation>
    </message>
    <message>
        <location line="-26"/>
        <source>VBR</source>
        <translation>Переменный битрейт (VBR)</translation>
    </message>
</context>
<context>
    <name>vp9encoder</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/vp9/ADM_vp9Dialog.cpp" line="+28"/>
        <source>Realtime</source>
        <translation>Режим реального времени</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Good quality</source>
        <translation>Хорошее качество</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Best quality</source>
        <translation>Наилучшее качество</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>For optimal quality, select 2-pass average bitrate mode and set target bitrate to zero</source>
        <translation>Наилучшее качество достигается в режиме среднего битрейта на два прохода при битрейте выставленном на ноль</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Deadline</source>
        <translation>Предел времени</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Speed</source>
        <translation>Скорость</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Tiling</source>
        <translation>Плиточное замощение</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Tiling benefits multi-threading of encoding and decoding.</source>
        <translation>Плиточное замощение обеспечивает многопоточность кодирования и декодирования.</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Threads</source>
        <translation>Многопоточность</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Use as many threads as CPU cores</source>
        <translation>Приравнять число потоков к количеству ядер процессора</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>GOP Size</source>
        <translation>Размер группы кадров</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Use full color range</source>
        <translation>Использовать полный цветовой диапазон</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Encoding Mode</source>
        <translation>Режим</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Speed vs Quality</source>
        <translation>Скорость и качество</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Keyframes</source>
        <translation>Ключевые кадры</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Miscellaneous</source>
        <translation>Прочее</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>libvpx VP9 Encoder Configuration</source>
        <translation>Настройки кодировщика VP9 libvpx</translation>
    </message>
</context>
<context>
    <name>vsWindow</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_demuxers/VapourSynth/qt4/vsProxy_qt4.cpp" line="+85"/>
        <source>Open VapourSynth File</source>
        <translation>Открыть файл VapourSynt</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>VS Script Files (*.vpy)</source>
        <translation>Файлы скриптов VS (*.vpy)</translation>
    </message>
</context>
<context>
    <name>waveletDenoise</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/waveletDenoise/ADM_vidWaveletDenoise.cpp" line="+42"/>
        <source>Wavelet denoiser</source>
        <translation>Шумоподавитель Вейвлет</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Based on Marco Rossini&apos;s denoiser.</source>
        <translation>На основе шумоподавителя Марко Россини.</translation>
    </message>
</context>
<context>
    <name>waveletDenoiseDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/waveletDenoise/qt4/waveletDenoise.ui" line="+14"/>
        <source>Wavelet Denoiser</source>
        <translation>Шумоподавитель Вейвлет</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Threshold</source>
        <translation>Порог</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Softness</source>
        <translation>Мягкость</translation>
    </message>
    <message>
        <location line="+62"/>
        <source>High quality</source>
        <translation>Высокое качество</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Denoise chroma</source>
        <translation>Шумоподавление цветности</translation>
    </message>
</context>
<context>
    <name>waveletSharp</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/waveletSharp/ADM_vidWaveletSharp.cpp" line="+42"/>
        <source>Wavelet sharpener</source>
        <translation>Увеличитель резкости Вейвлет</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Based on Marco Rossini&apos;s sharpener.</source>
        <translation>На основе увеличителя резкости Марко Россини.</translation>
    </message>
</context>
<context>
    <name>waveletSharpDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/waveletSharp/qt4/waveletSharp.ui" line="+14"/>
        <source>Wavelet Sharpener</source>
        <translation>Увеличитель резкости Вейвлет</translation>
    </message>
    <message>
        <location line="+124"/>
        <source>Strength</source>
        <translation>Сила</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Noise cutoff</source>
        <translation>Отсечка шума</translation>
    </message>
    <message>
        <location line="-54"/>
        <source>Radius</source>
        <translation>Радиус</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>High quality</source>
        <translation>Высокое качество</translation>
    </message>
</context>
<context>
    <name>webmmuxer</name>
    <message>
        <source>Unsupported Video.
Only VP8/VP9 video and Vorbis/Opus audio supported</source>
        <translation type="obsolete">Видео не поддерживается.
Поддерживаются только видео VP8/VP9 и аудио Vorbis/Opus</translation>
    </message>
    <message>
        <source>Unsupported Audio.
Only VP8/VP9 video and Vorbis/Opus audio supported</source>
        <translation type="obsolete">Аудио не поддерживается.
Поддерживаются только видео VP8/VP9 и аудио Vorbis/Opus</translation>
    </message>
    <message>
        <source>Saving Webm</source>
        <translation type="obsolete">Сохранение WEBM</translation>
    </message>
    <message>
        <source>Force display width</source>
        <translation type="vanished">Принудительная ширина изображения</translation>
    </message>
    <message>
        <source>Display width</source>
        <translation type="vanished">Ширина изображения</translation>
    </message>
</context>
<context>
    <name>workingDialog</name>
    <message>
        <location filename="../ADM_userInterfaces/ADM_dialog/working.ui" line="+14"/>
        <source>Processing</source>
        <translation>Обработка</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Time Remaining:</source>
        <translation>Осталось времени:</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Elapsed:</source>
        <translation>Прошло времени:</translation>
    </message>
    <message>
        <location line="+27"/>
        <source>00:00:00</source>
        <translation>00:00:00</translation>
    </message>
</context>
<context>
    <name>x264</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/ADM_x264Setup.cpp" line="+206"/>
        <source>Not coded</source>
        <translation>Не разработано</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>this mode has not been implemented
</source>
        <translation>этот режим ещё не разработан</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/Q_x264.cpp" line="+261"/>
        <source>Auto</source>
        <translation>Автоматически</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>none</source>
        <translation>нет</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Unknown</source>
        <translation>Неизвестно</translation>
    </message>
    <message>
        <location line="+55"/>
        <source>Custom</source>
        <translation>Вручную</translation>
    </message>
    <message>
        <location line="+424"/>
        <source>Target Bitrate:</source>
        <translation>Целевой битрейт:</translation>
    </message>
    <message>
        <location line="+1"/>
        <location line="+19"/>
        <source>kbit/s</source>
        <translation>кбит/с</translation>
    </message>
    <message>
        <location line="-15"/>
        <source>Quantiser:</source>
        <translation>Квантизатор:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Quality:</source>
        <translation>Качество:</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Target Video Size:</source>
        <translation>Целевой размер видео:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>MB</source>
        <translation>МБ</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Average Bitrate:</source>
        <translation>Средний битрейт:</translation>
    </message>
    <message>
        <location line="+80"/>
        <source>Macroblock-Tree optimisation requires Variance Adaptive Quantisation to be enabled.  Variance Adaptive Quantisation will automatically be enabled.

Do you wish to continue?</source>
        <translation>Для оптимизации дерева макроблоков требуется включённое адаптивное квантование дисперсии.  Адаптивное квантование дисперсии будет включено автоматически.

Вы хотите продолжить?</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Macroblock-Tree optimisation requires Variance Adaptive Quantisation to be enabled.  Macroblock-Tree optimisation will automatically be disabled.

Do you wish to continue?</source>
        <translation>Для оптимизации дерева макроблоков требуется включённое адаптивное квантование дисперсии.  Оптимизация дерева макроблоков будет включена автоматически.

Вы хотите продолжить?</translation>
    </message>
    <message>
        <location line="+61"/>
        <location line="+70"/>
        <location line="+14"/>
        <source>Error</source>
        <translation>Ошибка</translation>
    </message>
    <message>
        <location line="-84"/>
        <source>Cannot load preset</source>
        <translation>Невозможно загрузить предустановку</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Save Profile</source>
        <translation>Сохранить профиль</translation>
    </message>
    <message>
        <location line="+46"/>
        <source>Overwrite</source>
        <translation>Перезаписать</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Replace the following preset ?:</source>
        <translation>Заменить следующую предустановку ?:</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Cannot save preset</source>
        <translation>Невозможно сохранить предустановку</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Cannot delete custom profile</source>
        <translation>Невозможно удалить изменённый профиль</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Do you really want to delete the </source>
        <translation>Вы действительно хотите удалить </translation>
    </message>
    <message>
        <location line="+1"/>
        <source> profile ?.
If it is a system profile it will be recreated next time.</source>
        <translation> профиль ?.
Если этот профиль является системным, он будет создан заново при следующем запуске.</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Delete preset</source>
        <translation>Удалить предустановку</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Delete</source>
        <translation>Удалить</translation>
    </message>
</context>
<context>
    <name>x264ConfigDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264ConfigDialog.ui" line="+375"/>
        <source>Rate Control</source>
        <translation>Управление битрейтом</translation>
    </message>
    <message>
        <location line="+2464"/>
        <source>Auto Variance</source>
        <translation>Авто-дисперсия</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Auto Variance Biased</source>
        <translation>Смещение авто-дисперсии</translation>
    </message>
    <message>
        <location line="+418"/>
        <source>Disable</source>
        <translation>Запретить</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Auto-detect</source>
        <translation>Автоопределение</translation>
    </message>
    <message>
        <location line="-2303"/>
        <source>Motion Estimation</source>
        <translation>Определение движения</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Diamond Search</source>
        <translation>Ромбовидный поиск</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Hexagonal Search</source>
        <translation>Гексагональный поиск</translation>
    </message>
    <message>
        <location line="+97"/>
        <source>11 (Best)</source>
        <translation>11 (лучший)</translation>
    </message>
    <message>
        <location line="+216"/>
        <location line="+450"/>
        <location line="+36"/>
        <source>Disabled</source>
        <translation>Отключено</translation>
    </message>
    <message>
        <location line="-433"/>
        <location line="+2601"/>
        <source>None</source>
        <translation>Нет</translation>
    </message>
    <message>
        <location line="-3735"/>
        <location line="+1149"/>
        <source>Auto</source>
        <translation>Авто</translation>
    </message>
    <message>
        <location line="+423"/>
        <source>Fast</source>
        <translation>Быстрый</translation>
    </message>
    <message>
        <location line="+1603"/>
        <source>Output</source>
        <translation>Выход</translation>
    </message>
    <message>
        <location line="-565"/>
        <source>Normal</source>
        <translation>Нормальное</translation>
    </message>
    <message>
        <location line="+595"/>
        <source>Pixel Aspect Ratio</source>
        <translation>Соотношение сторон</translation>
    </message>
    <message>
        <location line="+232"/>
        <source>Crop</source>
        <translation>Обрезка</translation>
    </message>
    <message>
        <location line="-3646"/>
        <source>x264 Configuraton</source>
        <translation>Настройки x264</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Configuration:</source>
        <translation>Настройки:</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Save As</source>
        <translation>Сохранить как</translation>
    </message>
    <message>
        <location line="+7"/>
        <location line="+3157"/>
        <source>Delete</source>
        <translation>Удалить</translation>
    </message>
    <message>
        <location line="-3115"/>
        <source>General</source>
        <translation>Общий</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Basic</source>
        <translation>Основной</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Use advanced configuration</source>
        <translation>Использовать расширенные настройки</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Profile:</source>
        <translation>Профиль:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Preset:</source>
        <translation>Предустановка:</translation>
    </message>
    <message>
        <location line="+51"/>
        <source>Tuning:</source>
        <translation>Настройка:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>IDC Level:</source>
        <translation>Уровень IDC:</translation>
    </message>
    <message>
        <location line="+38"/>
        <location line="+669"/>
        <source>1</source>
        <translation>1</translation>
    </message>
    <message>
        <location line="-664"/>
        <source>1.1</source>
        <translation>1.1</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>1.2</source>
        <translation>1.2</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>1.3</source>
        <translation>1.3</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>2</source>
        <translation>2</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>2.1</source>
        <translation>2.1</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>2.2</source>
        <translation>2.2</translation>
    </message>
    <message>
        <location line="+5"/>
        <location line="+639"/>
        <source>3</source>
        <translation>3</translation>
    </message>
    <message>
        <location line="-634"/>
        <source>3.1</source>
        <translation>3.1</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>3.2</source>
        <translation>3.2</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>4</source>
        <translation>4</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>4.1</source>
        <translation>4.1</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>4.2</source>
        <translation>4.2</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>5</source>
        <translation>5</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>5.1</source>
        <translation>5.1</translation>
    </message>
    <message>
        <location line="+25"/>
        <source>Fast Decode</source>
        <translation>Быстрое декодирование</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Zero Latency</source>
        <translation>Нулевой отклик</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Fast First Pass</source>
        <translation>Быстрый первый проход</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Threads </source>
        <translation>Потоки </translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Target Video Size:</source>
        <translation>Целевой размер видео:</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Constant Bitrate (Single Pass)</source>
        <translation>Постоянный битрейт (1 проход)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Constant Quantiser (Single Pass)</source>
        <translation>Постоянный квантизатор (1 проход)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Constant Rate Factor (Single Pass)</source>
        <translation>Постоянный фактор битрейта (1 проход)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Video Size (Two Pass)</source>
        <translation>Размер видео (2 прохода)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Average Bitrate (Two Pass)</source>
        <translation>Средний битрейт (2 прохода)</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Encoding Mode:</source>
        <translation>Режим кодирования:</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>MB</source>
        <translation>МБ</translation>
    </message>
    <message>
        <location line="+60"/>
        <location line="+200"/>
        <source>0 (High Quality)</source>
        <translation>0 (высокое качество)</translation>
    </message>
    <message>
        <location line="-177"/>
        <location line="+200"/>
        <location line="+1649"/>
        <source>Quantiser</source>
        <translation>Квантизатор</translation>
    </message>
    <message>
        <location line="-1826"/>
        <location line="+200"/>
        <source>51 (Low Quality)</source>
        <translation>51 (низкое качество)</translation>
    </message>
    <message>
        <location line="-101"/>
        <source>Advanced RC</source>
        <translation>Управление битрейтом</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Advanced Rate Control</source>
        <translation>Расширенное управление битрейтом</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Maximum Constant Rate Factor</source>
        <translation>Фактор максимального постоянного битрейта</translation>
    </message>
    <message>
        <location line="+158"/>
        <source>Macroblock-tree Rate Control</source>
        <translation>Управление битрейтом дерева макроблоков</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Frametype Lookahead:</source>
        <translation>Предсказание типа кадров:</translation>
    </message>
    <message>
        <location line="+14"/>
        <location line="+2495"/>
        <source>frames</source>
        <translation>кадры</translation>
    </message>
    <message>
        <location line="-2471"/>
        <source>Sequence Parameter Set Identifer:</source>
        <translation>Идентификатор набора параметров последовательности:</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>0</source>
        <translation>0</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>7</source>
        <translation>7</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>15</source>
        <translation>15</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>31</source>
        <translation>31</translation>
    </message>
    <message>
        <location line="+42"/>
        <source>Motion</source>
        <translation>Движение</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Motion Estimation Method:</source>
        <translation>Метод определения движения:</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Uneven Multi-hexagonal Search</source>
        <translation>Поиск на основе неравного мультишестиугольника</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Exhaustive Search</source>
        <translation>Исчерпывающий поиск</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Hadamard Exhaustive Search</source>
        <translation>Исчерпывающий поиск Адамара</translation>
    </message>
    <message>
        <location line="+42"/>
        <source>1 (Fast)</source>
        <translation>1 (Быстрый)</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Subpixel Refinement</source>
        <translation>Субпиксельная точность</translation>
    </message>
    <message>
        <location line="+98"/>
        <source>Motion Vector</source>
        <translation>Вектор движения</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Maximum Motion Vector Length:</source>
        <translation>Максимальная длина вектора движения:</translation>
    </message>
    <message>
        <location line="+70"/>
        <source>Minimum Buffer Between Threads:</source>
        <translation>Минимальный буфер между потоками:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Maximum Motion Vector Search Range:</source>
        <translation>Максимальный диапазон поиска вектора движения:</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Prediction</source>
        <translation>Предсказание</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Weighted References</source>
        <translation>Взвешенные опорные</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Weighted References + Duplicates</source>
        <translation>Взвешенные опорные + дубликаты</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Direct Prediction Mode:</source>
        <translation>Режим прямого предсказания:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Weighted Prediction for P-frames:</source>
        <translation>Взвешенное предсказание для P-кадров:</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Spatial</source>
        <translation>Пространственный</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Temporal</source>
        <translation>Временной</translation>
    </message>
    <message>
        <location line="+30"/>
        <source>Weighted Prediction for B-frames</source>
        <translation>Взвешенное предсказание для B-кадров</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Constrained Intra Prediction</source>
        <translation>Ограниченное внутреннее предсказание</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Partition</source>
        <translation>Раздел</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Partition Search</source>
        <translation>Поиск раздела</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>8x8 DCT Spatial Transform</source>
        <translation>8x8 DCT пространственное трансформирование</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>8x8, 8x16 and 16x8 P-frame Intra-predicted Blocks</source>
        <translation>8x8, 8x16 и 16x8 предсказанные внутренне блоки P-кадров</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>8x8, 8x16 and 16x8 B-frame Intra-predicted Blocks</source>
        <translation>8x8, 8x16 и 16x8 предсказанные внутренне блоки B-кадров</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>4x4, 4x8 and 8x4 P-frame Intra-predicted Blocks</source>
        <translation>4x4, 4x8 и 8x4 предсказанные внутренне блоки P-кадров</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>8x8 Intra-predicted Blocks</source>
        <translation>8x8 предсказанные внутренне блоки</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>4x4 Intra-predicted Blocks</source>
        <translation>4x4 предсказанные внутренне блоки</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Frame</source>
        <translation>Кадр</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Frame Encoding</source>
        <translation>Кодировка кадров</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>CABAC</source>
        <translation>CABAC</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Loop Filter:</source>
        <translation>Фильтр зацикливания:</translation>
    </message>
    <message>
        <location line="+12"/>
        <location line="+1333"/>
        <source>Strength:</source>
        <translation>Уровень:</translation>
    </message>
    <message>
        <location line="-1294"/>
        <source>Threshold:</source>
        <translation>Порог:</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Open GOP:</source>
        <translation>Открытая группа кадров:</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Normal Mode</source>
        <translation>Нормальный режим</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Blu-ray Mode</source>
        <translation>Режим Blu-ray</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Interlaced:</source>
        <translation>Чересстрочный:</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Bottom Field First</source>
        <translation>Сначала нижнее поле</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Top Field First</source>
        <translation>Сначала верхнее поле</translation>
    </message>
    <message>
        <location line="+30"/>
        <source>Maximum Reference Frames:</source>
        <translation>Максимум опорных кадров:</translation>
    </message>
    <message>
        <location line="+39"/>
        <source>B-frames</source>
        <translation>B-кадры</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>B-frames as References:</source>
        <translation>B-кадры как опорные:</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Strictly Hierarchical Pyramid</source>
        <translation>Строгая иерархическая пирамида</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Non-strict (Not Blu-ray Compatible)</source>
        <translation>Нестрогое (несовместимо с Blu-ray)</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Optimal</source>
        <translation>Оптимальная</translation>
    </message>
    <message>
        <location line="+74"/>
        <source>B-frame Bias:</source>
        <translation>Смещение B-кадров:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Maximum Consecutive B-frames:</source>
        <translation>Максимум последовательных B-кадров:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Adaptive B-frame Decision:</source>
        <translation>Адаптивное определение B-кадров:</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>I-frames</source>
        <translation>I-кадры</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>GOP Size:</source>
        <translation>Размер группы кадров:</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Minimum:</source>
        <translation>Минимум:</translation>
    </message>
    <message>
        <location line="+33"/>
        <source>Maximum:</source>
        <translation>Максимум:</translation>
    </message>
    <message>
        <location line="+32"/>
        <source>I-frame Threshold:</source>
        <translation>Порог I-кадров:</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Periodic Intra Refresh</source>
        <translation>Периодическое внутреннее обновление</translation>
    </message>
    <message>
        <location line="+24"/>
        <location line="+6"/>
        <source>Analysis</source>
        <translation>Анализ</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Mixed References</source>
        <translation>Смешанные опорные</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Chroma Motion Estimation</source>
        <translation>Оценка движения цветности (chroma)</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Trellis Quantization:</source>
        <translation>Треллис-квантование:</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Final Macroblock Only</source>
        <translation>Только последний макроблок</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Always On</source>
        <translation>Всегда включено</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Fast Skip Detection on P-frames</source>
        <translation>Быстрый пропуск обнаружения на P-кадрах</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>DCT Decimation on P-frames</source>
        <translation>Децимация DCT на P-кадрах</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Psychovisual Rate Distortion Optimisation:</source>
        <translation>Оптимизация психовизуального искажения частоты:</translation>
    </message>
    <message>
        <location line="+37"/>
        <source>Psychovisual Trellis:</source>
        <translation>Психовизуальная треллис-модуляция:</translation>
    </message>
    <message>
        <location line="+37"/>
        <source>Noise Reduction:</source>
        <translation>Уменьшение шума:</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Luma Quantisation Deadzone</source>
        <translation>Мёртвая зона квантования яркости (luma)</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Intra Luma Quantisation Deadzone:</source>
        <translation>Мёртвая зона квантования внутренней яркости (luma):</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Inter Luma Quantisation Deadzone:</source>
        <translation>Мёртвая зона квантования внешней яркости (luma):</translation>
    </message>
    <message>
        <location line="+66"/>
        <source>Quantisation Matrix</source>
        <translation>Матрица квантования</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Flat Matrix</source>
        <translation>Плоская матрица</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>JVT Matrix</source>
        <translation>Матрица JVT</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Custom Matrix</source>
        <translation>Собственная матрица</translation>
    </message>
    <message>
        <location line="+10"/>
        <location line="+861"/>
        <source>Edit</source>
        <translation>Править</translation>
    </message>
    <message>
        <location line="-814"/>
        <source>Quantiser Control</source>
        <translation>Управление квантизатором</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Maximum Quantiser:</source>
        <translation>Максимальный квантизатор:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>I and P-frame Quantiser Ratio:</source>
        <translation>Соотношение квантизатора I- и P-кадров:</translation>
    </message>
    <message>
        <location line="+85"/>
        <location line="+179"/>
        <location line="+307"/>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <location line="-464"/>
        <source>Maximum Quantiser Step:</source>
        <translation>Максимальный шаг квантизатора:</translation>
    </message>
    <message>
        <location line="+34"/>
        <source>P and B-frame Quantiser Ratio:</source>
        <translation>Соотношение квантизатора P- и B-кадров:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Average Bitrate Tolerance:</source>
        <translation>Допуск среднего битрейта:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Chroma to Luma Quantiser Offset:</source>
        <translation>Смещение квантизатора от Chroma до Luma:</translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Minimum Quantiser:</source>
        <translation>Минимальный квантизатор:</translation>
    </message>
    <message>
        <location line="+48"/>
        <source>Quantiser Curve Compression</source>
        <translation>Сжатие кривой квантизатора</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Quantiser Curve Compression:</source>
        <translation>Сжатие кривой квантизатора:</translation>
    </message>
    <message>
        <location line="+45"/>
        <source>Reduce Fluctuation Before Curve Compression:</source>
        <translation>Уменьшить колебание до сжатия кривых:</translation>
    </message>
    <message>
        <location line="+70"/>
        <source>Reduce Fluctuation After Curve Compression:</source>
        <translation>Уменьшить колебание после сжатия кривых:</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Adaptive Quantisation</source>
        <translation>Адаптивное квантование</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Variance AQ:</source>
        <translation>Адаптивное квантование дисперсии:</translation>
    </message>
    <message>
        <location line="+114"/>
        <source>Advanced 1</source>
        <translation>Дополнительно 1</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Video Buffer Verifier</source>
        <translation>Верификатор буфера видео (VBV)</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Maximum VBV Bitrate:</source>
        <translation>Максимальный битрейт VBV:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Initial VBV Buffer Occupancy:</source>
        <translation>Начальное заполнение буфера VBV:</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>kbit</source>
        <translation>кбит</translation>
    </message>
    <message>
        <location line="+65"/>
        <source>kbit/s</source>
        <translation>кбит/с</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>VBV Buffer Size:</source>
        <translation>Размер буфера VBV:</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Slicing</source>
        <translation>Срезание</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Slices per Frame:</source>
        <translation>Срезов на кадр:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Maximum Size per Slice:</source>
        <translation>Максимальный размер на срез:</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>bytes</source>
        <translation>байт</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>Maximum Macroblocks per Slice:</source>
        <translation>Максимум макроблоков на срез:</translation>
    </message>
    <message>
        <location line="+58"/>
        <source>Zones</source>
        <translation>Зоны</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Add</source>
        <translation>Добавить</translation>
    </message>
    <message>
        <location line="+42"/>
        <source>Advanced 2</source>
        <translation>Дополнительно 2</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Multithreading</source>
        <translation>Многопоточность</translation>
    </message>
    <message>
        <location line="+27"/>
        <source>Custom:</source>
        <comment>multithreading</comment>
        <translation>Вручную:</translation>
    </message>
    <message>
        <location line="+37"/>
        <source>Enforce Repeatability</source>
        <translation>Принудительная повторяемость</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Slice-based Threading</source>
        <translation>Поточность на основе срезов</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Custom Threaded Lookahead Buffer:</source>
        <translation>Ручной многопоточный буфер предсказания:</translation>
    </message>
    <message>
        <location line="+59"/>
        <source>Output 1</source>
        <translation>Выход 1</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Generate Access Unit Delimiters</source>
        <translation>Генерировать разделители единиц доступа</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>BluRay compatibility</source>
        <translation>Совместимость с BluRay</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Generate fake interlaced</source>
        <translation>Создавать поддельную чересстрочность</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Custom:</source>
        <comment>PAR</comment>
        <translation>Вручную:</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>As Input</source>
        <translation>Как вход</translation>
    </message>
    <message>
        <location line="+49"/>
        <source>:</source>
        <translation>:</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Predefined Aspect Ratio:</source>
        <translation>Предопределённое соотношение сторон:</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>16:15 (PAL 4:3)</source>
        <translation>16:15 (PAL 4:3)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>64:45 (PAL 16:9)</source>
        <translation>64:45 (PAL 16:9)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>8:9 (NTSC 4:3)</source>
        <translation>8:9 (NTSC 4:3)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>32:27 (NTSC 16:9)</source>
        <translation>32:27 (NTSC 16:9)</translation>
    </message>
    <message>
        <location line="+42"/>
        <source>Output 2</source>
        <translation>Выход 2</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Video Usability Information</source>
        <translation>Информация об использовании видео</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>These settings are only suggestions for the playback equipment.  Use at your own risk.</source>
        <translation>Эти настройки всего лишь предлагаются для воспроизведения на оборудовании. Используйте их на свой страх и риск.</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Overscan:</source>
        <translation>Пересканирование:</translation>
    </message>
    <message>
        <location line="+10"/>
        <location line="+46"/>
        <location line="+58"/>
        <location line="+63"/>
        <location line="+73"/>
        <source>Undefined</source>
        <translation>Не определено</translation>
    </message>
    <message>
        <location line="-235"/>
        <source>Show</source>
        <translation>Показать</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Video Format:</source>
        <translation>Формат видео:</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Component</source>
        <translation>Компонент</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>PAL</source>
        <translation>PAL</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>NTSC</source>
        <translation>NTSC</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>SECAM</source>
        <translation>SECAM</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>MAC</source>
        <translation>MAC</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Colour Primaries:</source>
        <translation>Первичные цвета:</translation>
    </message>
    <message>
        <location line="+15"/>
        <location line="+63"/>
        <location line="+73"/>
        <source>BT709</source>
        <translation>BT709</translation>
    </message>
    <message>
        <location line="-131"/>
        <location line="+63"/>
        <source>BT470M</source>
        <translation>BT470M</translation>
    </message>
    <message>
        <location line="-58"/>
        <location line="+63"/>
        <location line="+73"/>
        <source>BT470BG</source>
        <translation>BT470BG</translation>
    </message>
    <message>
        <location line="-131"/>
        <location line="+136"/>
        <source>SMPTE170M</source>
        <translation>SMPTE170M</translation>
    </message>
    <message>
        <location line="-131"/>
        <location line="+78"/>
        <location line="+58"/>
        <source>SMPTE240M</source>
        <translation>SMPTE240M</translation>
    </message>
    <message>
        <location line="-131"/>
        <source>Film</source>
        <translation>Фильм</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Transfer Characteristics:</source>
        <translation>Характеристики перехода:</translation>
    </message>
    <message>
        <location line="+30"/>
        <source>Linear</source>
        <translation>Линейный</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>LOG100</source>
        <translation>LOG100</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>LOG316</source>
        <translation>LOG316</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>SMPTEL170M</source>
        <translation>SMPTEL170M</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Colour Matrix:</source>
        <translation>Цветовая матрица:</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>FCC</source>
        <translation>FCC</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>GBR</source>
        <translation>GBR</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>YCgCo</source>
        <translation>YCgCo</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>HRD Parameters:</source>
        <translation>Параметры HRD:</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>VBR</source>
        <translation>Переменный битрейт (VBR)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>CBR</source>
        <translation>Постоянный битрейт (CBR)</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Chroma Sample Location:</source>
        <translation>Положение образца цветности (chroma):</translation>
    </message>
    <message>
        <location line="+33"/>
        <source>Full Range Samples</source>
        <translation>Образцы полного диапазона</translation>
    </message>
</context>
<context>
    <name>x264CustomMatrixDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x264/qt4/x264CustomMatrixDialog.ui" line="+16"/>
        <source>x264 Custom Matrix</source>
        <translation>Ручная матрица x264</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Intra 4x4</source>
        <translation>Внутренняя 4x4</translation>
    </message>
    <message>
        <location line="+28"/>
        <location line="+446"/>
        <location line="+446"/>
        <location line="+703"/>
        <source>Luma:</source>
        <translation>Яркость (luma):</translation>
    </message>
    <message>
        <location line="-1385"/>
        <location line="+446"/>
        <source>Chroma U/V:</source>
        <translation>Цветность (chroma) U/V:</translation>
    </message>
    <message>
        <location line="-238"/>
        <source>Inter 4x4</source>
        <translation>Внешняя 4x4</translation>
    </message>
    <message>
        <location line="+446"/>
        <source>Intra 8x8</source>
        <translation>Внутренняя 8x8</translation>
    </message>
    <message>
        <location line="+703"/>
        <source>Inter 8x8</source>
        <translation>Внешняя 8x8</translation>
    </message>
    <message>
        <location line="+727"/>
        <source>Load File</source>
        <translation>Загрузить файл</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>OK</source>
        <translation>Да</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Cancel</source>
        <translation>Отмена</translation>
    </message>
</context>
<context>
    <name>x265</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/ADM_x265Setup.cpp" line="+264"/>
        <source>Not coded</source>
        <translation>Не разработано</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>this mode has not been implemented
</source>
        <translation>этот режим не разработан
</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/Q_x265.cpp" line="+289"/>
        <source>Auto</source>
        <translation>Автоматически</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>none</source>
        <translation>нет</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Default</source>
        <translation>Стандартный</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Unknown</source>
        <translation>Неизвестно</translation>
    </message>
    <message>
        <location line="+73"/>
        <source>Custom</source>
        <translation>Вручную</translation>
    </message>
    <message>
        <location line="+353"/>
        <source>Target Bitrate:</source>
        <translation>Целевой битрейт:</translation>
    </message>
    <message>
        <location line="+1"/>
        <location line="+20"/>
        <source>kbit/s</source>
        <translation>кбит/с</translation>
    </message>
    <message>
        <location line="-15"/>
        <source>Quantiser:</source>
        <translation>Квантизатор:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Quality:</source>
        <translation>Качество:</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Target Video Size:</source>
        <translation>Целевой размер видео:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>MB</source>
        <translation>МБ</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Average Bitrate:</source>
        <translation>Средний битрейт:</translation>
    </message>
    <message>
        <location line="+128"/>
        <source>Macroblock-Tree optimisation requires Variance Adaptive Quantisation to be enabled.  Variance Adaptive Quantisation will automatically be enabled.

Do you wish to continue?</source>
        <translation>Для оптимизации дерева макроблоков требуется включённое адаптивное квантование дисперсии.  Адаптивное квантование дисперсии будет включено автоматически.

Вы хотите продолжить?</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Macroblock-Tree optimisation requires Variance Adaptive Quantisation to be enabled.  Macroblock-Tree optimisation will automatically be disabled.

Do you wish to continue?</source>
        <translation>Для оптимизации дерева макроблоков требуется включённое адаптивное квантование дисперсии.  Оптимизация дерева макроблоков будет включена автоматически.

Вы хотите продолжить?</translation>
    </message>
    <message>
        <location line="+41"/>
        <location line="+67"/>
        <location line="+17"/>
        <source>Error</source>
        <translation>Ошибка</translation>
    </message>
    <message>
        <location line="-84"/>
        <source>Cannot load preset</source>
        <translation>Невозможно загрузить предустановку</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Save Profile</source>
        <translation>Сохранить профиль</translation>
    </message>
    <message>
        <location line="+47"/>
        <source>Overwrite</source>
        <translation>Перезаписать</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Replace the following preset ?:</source>
        <translation>Заменить следующую предустановку ?:</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Cannot save preset</source>
        <translation>Невозможно сохранить предустановку</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Cannot delete custom profile</source>
        <translation>Невозможно удалить ручной профиль</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Do you really want to delete the </source>
        <translation>Вы действительно хотите удалить </translation>
    </message>
    <message>
        <location line="+1"/>
        <source> profile ?.
If it is a system profile it will be recreated next time.</source>
        <translation> профиль?
Если этот профиль является системным, он будет создан заново при следующем запуске.</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Delete preset</source>
        <translation>Удалить предустановку</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Delete</source>
        <translation>Удалить</translation>
    </message>
</context>
<context>
    <name>x265ConfigDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265ConfigDialog.ui" line="+15"/>
        <source>x265 Configuration</source>
        <translation>Настройки x265</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Configuration:</source>
        <translation>Настройки:</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Save As</source>
        <translation>Сохранить как</translation>
    </message>
    <message>
        <location line="+7"/>
        <location line="+3071"/>
        <source>Delete</source>
        <translation>Удалить</translation>
    </message>
    <message>
        <location line="-3029"/>
        <source>General</source>
        <translation>Общий</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Basic</source>
        <translation>Основной</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Use advanced configuration</source>
        <translation>Использовать расширенные настройки</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Profile:</source>
        <translation>Профиль:</translation>
    </message>
    <message>
        <location line="+81"/>
        <source>Preset:</source>
        <translation>Предустановка:</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Tuning:</source>
        <translation>Настройка:</translation>
    </message>
    <message>
        <location line="+91"/>
        <source>IDC Level:</source>
        <translation>Уровень IDC:</translation>
    </message>
    <message>
        <source>Auto</source>
        <translation type="obsolete">Автоматически</translation>
    </message>
    <message>
        <location line="+572"/>
        <source>1</source>
        <translation>1</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>3</source>
        <translation>3</translation>
    </message>
    <message>
        <location line="-661"/>
        <source>Pool Threads </source>
        <translation>Потоки пула </translation>
    </message>
    <message>
        <location line="+59"/>
        <source>Frame Threads </source>
        <translation>Потоки кадров </translation>
    </message>
    <message>
        <location line="+32"/>
        <source>Output Bit Depth:</source>
        <translation>Глубина цвета на выходе:</translation>
    </message>
    <message>
        <location line="+32"/>
        <source>Rate Control</source>
        <translation>Управление битрейтом</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Target Video Size:</source>
        <translation>Целевой размер видео:</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Constant Bitrate (Single Pass)</source>
        <translation>Постоянный битрейт (1 проход)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Constant Quantiser (Single Pass)</source>
        <translation>Постоянный квантизатор (1 проход)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Constant Rate Factor (Single Pass)</source>
        <translation>Постоянный фактор битрейта (1 проход)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Video Size (Two Pass)</source>
        <translation>Размер видео (2 прохода)</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Average Bitrate (Two Pass)</source>
        <translation>Средний битрейт (2 прохода)</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Encoding Mode:</source>
        <translation>Режим кодирования:</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>MB</source>
        <translation>МБ</translation>
    </message>
    <message>
        <location line="+44"/>
        <location line="+213"/>
        <source>0 (High Quality)</source>
        <translation>0 (высокое качество)</translation>
    </message>
    <message>
        <location line="-190"/>
        <location line="+213"/>
        <location line="+1376"/>
        <source>Quantiser</source>
        <translation>Квантизатор</translation>
    </message>
    <message>
        <location line="-1566"/>
        <location line="+213"/>
        <source>51 (Low Quality)</source>
        <translation>51 (низкое качество)</translation>
    </message>
    <message>
        <location line="-143"/>
        <source>Use Strict Constant Bitrate Mode</source>
        <translation>Использовать режим строго постоянного битрейта</translation>
    </message>
    <message>
        <location line="+42"/>
        <source>Advanced RC</source>
        <translation>Управление битрейтом</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Advanced Rate Control</source>
        <translation>Расширенное управление битрейтом</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Maximum Constant Rate Factor</source>
        <translation>Фактор максимального постоянного битрейта</translation>
    </message>
    <message>
        <location line="+158"/>
        <source>Coding Unit-tree Rate Control</source>
        <translation>Управление битрейтом дерева частей</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Frametype Lookahead:</source>
        <translation>Предсказание типа кадров:</translation>
    </message>
    <message>
        <location line="+14"/>
        <location line="+2451"/>
        <source>frames</source>
        <translation>кадры</translation>
    </message>
    <message>
        <location line="-2427"/>
        <source>Sequence Parameter Set Identifer:</source>
        <translation>Идентификатор набора параметров последовательности:</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>0</source>
        <translation>0</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>7</source>
        <translation>7</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>15</source>
        <translation>15</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>31</source>
        <translation>31</translation>
    </message>
    <message>
        <location line="+42"/>
        <source>Motion</source>
        <translation>Движение</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Motion Estimation</source>
        <translation>Определение движения</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Motion Estimation Method:</source>
        <translation>Метод определения движения:</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Diamond Search</source>
        <translation>Ромбовидный поиск</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Hexagonal Search</source>
        <translation>Гексагональный поиск</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Uneven Multi-hexagonal Search</source>
        <translation>Поиск на основе неравного мультишестиугольника</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Star Search</source>
        <translation>Звёздчатый поиск</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Exhaustive Search</source>
        <translation>Исчерпывающий поиск</translation>
    </message>
    <message>
        <location line="+42"/>
        <source>1 (Fast)</source>
        <translation>1 (быстрый)</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Subpixel Refinement</source>
        <translation>Субпиксельная точность</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>7 (Best)</source>
        <translation>7 (лучший)</translation>
    </message>
    <message>
        <location line="+78"/>
        <source>Motion Vector</source>
        <translation>Вектор движения</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Maximum Motion Vector Search Range:</source>
        <translation>Диапазон поиска вектора максимального движения:</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Prediction</source>
        <translation>Предсказание</translation>
    </message>
    <message>
        <source>Weighted Prediction for B-frames</source>
        <translation type="obsolete">Взвешенное предсказание для B-кадров</translation>
    </message>
    <message>
        <location line="+31"/>
        <source>Constrained Intra Prediction</source>
        <translation>Ограниченное внутреннее предсказание</translation>
    </message>
    <message>
        <location line="+41"/>
        <source>Weighted Prediction for P-frames:</source>
        <translation>Взвешенное предсказание для P-кадров:</translation>
    </message>
    <message>
        <location line="+10"/>
        <location line="+269"/>
        <location line="+43"/>
        <source>Disabled</source>
        <translation>Отключено</translation>
    </message>
    <message>
        <location line="-307"/>
        <source>Weighted References</source>
        <translation>Взвешенные опорные</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Weighted References + Duplicates</source>
        <translation>Взвешенные опорные + дубликаты</translation>
    </message>
    <message>
        <location line="+42"/>
        <source>Frame</source>
        <translation>Кадр</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Frame Encoding</source>
        <translation>Кодирование кадра</translation>
    </message>
    <message>
        <source>Loop Filter:</source>
        <translation type="obsolete">Фильтр зацикливания:</translation>
    </message>
    <message>
        <source>Open GOP:</source>
        <translation type="obsolete">Открыть группу кадров:</translation>
    </message>
    <message>
        <source>Normal Mode</source>
        <translation type="obsolete">Нормальный режим</translation>
    </message>
    <message>
        <source>Blu-ray Mode</source>
        <translation type="obsolete">Режим Blu-ray</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Loop Filter</source>
        <translation>Фильтр зацикливания</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Open GOP</source>
        <translation>Открытая группа кадров</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Interlaced:</source>
        <translation>Чересстрочный:</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Top Field First</source>
        <translation>Сначала верхнее поле</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Bottom Field First</source>
        <translation>Сначала нижнее поле</translation>
    </message>
    <message>
        <location line="+30"/>
        <source>Maximum Reference Frames:</source>
        <translation>Максимум опорных кадров:</translation>
    </message>
    <message>
        <location line="+60"/>
        <source>B-frames</source>
        <translation>B-кадры</translation>
    </message>
    <message>
        <location line="+114"/>
        <source>B-frames as References:</source>
        <translation>B-кадры как опорные:</translation>
    </message>
    <message>
        <source>Strictly Hierarchical Pyramid</source>
        <translation type="obsolete">Строгая иерархическая пирамида</translation>
    </message>
    <message>
        <source>Non-strict (Not Blu-ray Compatible)</source>
        <translation type="obsolete">Нестрогая (не совместима с Blu-ray)</translation>
    </message>
    <message>
        <location line="-28"/>
        <source>Fast</source>
        <translation>Быстро</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Optimal</source>
        <translation>Оптимально</translation>
    </message>
    <message>
        <location line="-54"/>
        <source>B-frame Bias:</source>
        <translation>Смещение B-кадров:</translation>
    </message>
    <message>
        <location line="-267"/>
        <source>Motion Partitions:</source>
        <translation>Разделы движения:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Rectangular</source>
        <translation>Прямоугольный</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Asymmetric</source>
        <translation>Асимметричный</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Limit Motion Partition Modes</source>
        <translation>Ограничение режимов разделения движения</translation>
    </message>
    <message>
        <location line="+213"/>
        <source>Maximum Consecutive B-frames:</source>
        <translation>Максимум последовательных B-кадров:</translation>
    </message>
    <message>
        <location line="+65"/>
        <source>Adaptive B-frame Decision:</source>
        <translation>Адаптивное определение B-кадров:</translation>
    </message>
    <message>
        <location line="+58"/>
        <source>Enabled</source>
        <translation>Включено</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>I-frames</source>
        <translation>I-кадры</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>GOP Size:</source>
        <translation>Размер группы кадров:</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Minimum:</source>
        <translation>Минимум:</translation>
    </message>
    <message>
        <location line="+33"/>
        <source>Maximum:</source>
        <translation>Максимум:</translation>
    </message>
    <message>
        <location line="+32"/>
        <source>I-frame Threshold:</source>
        <translation>Порог I-кадров:</translation>
    </message>
    <message>
        <location line="+53"/>
        <location line="+6"/>
        <source>Analysis</source>
        <translation>Анализ</translation>
    </message>
    <message>
        <source>Trellis Quantization:</source>
        <translation type="obsolete">Треллис-квантование:</translation>
    </message>
    <message>
        <source>Final Macroblock Only</source>
        <translation type="obsolete">Только последний макроблок</translation>
    </message>
    <message>
        <source>Always On</source>
        <translation type="obsolete">Всегда включено</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Fast Skip Detection on P-frames</source>
        <translation>Быстрый пропуск обнаружения P-кадров</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>DCT Decimation on P-frames</source>
        <translation>Децимация DCT на P-кадрах</translation>
    </message>
    <message>
        <source>Psychovisual Rate Distortion Optimisation:</source>
        <translation type="obsolete">Оптимизация психовизуального искажения частоты</translation>
    </message>
    <message>
        <location line="-571"/>
        <source>Prediction for B-frames:</source>
        <translation>Предсказание для B-кадров:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Weighted Prediction</source>
        <translation>Взвешенное предсказание</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Intra Prediction</source>
        <translation>Внутреннее предсказание</translation>
    </message>
    <message>
        <location line="+222"/>
        <source>Limit References by:</source>
        <translation>Ограничение опорных:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>CU</source>
        <translation>CU</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Depth</source>
        <translation>Глубина</translation>
    </message>
    <message>
        <location line="+330"/>
        <source>Rate Distortion Optimisation:</source>
        <translation>Оптимизация искажения частоты:</translation>
    </message>
    <message>
        <location line="+22"/>
        <location line="+88"/>
        <source>Level:</source>
        <translation>Уровень:</translation>
    </message>
    <message>
        <location line="-54"/>
        <location line="+88"/>
        <source>Psycho-visual Strength:</source>
        <translation>Психовизуальный уровень:</translation>
    </message>
    <message>
        <source>Noise Reduction:</source>
        <translation type="obsolete">Уменьшение шума:</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Noise Reduction Intra:</source>
        <translation>Подавление шума в интра-блоках:</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Noise Reduction Inter:</source>
        <translation>Подавление шума в интер-блоках:</translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Strong Intra Smoothing</source>
        <translation>Сильное внешнее сглаживание</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Quantisation Matrix</source>
        <translation>Матрица квантования</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Flat Matrix</source>
        <translation>Плоская матрица</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>JVT Matrix</source>
        <translation>Матрица JVT</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Custom Matrix</source>
        <translation>Ручная матрица</translation>
    </message>
    <message>
        <location line="+10"/>
        <location line="+1090"/>
        <source>Edit</source>
        <translation>Править</translation>
    </message>
    <message>
        <location line="-1043"/>
        <source>Quantiser Control</source>
        <translation>Управление квантизатором</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Chroma to Luma Quantiser Offset:</source>
        <translation>Смещение квантизатора от Chroma до Luma:</translation>
    </message>
    <message>
        <location line="+34"/>
        <source>I and P-frame Quantiser Ratio:</source>
        <translation>Соотношение квантизатора I- и P-кадров:</translation>
    </message>
    <message>
        <location line="+182"/>
        <location line="+618"/>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <location line="-757"/>
        <source>Maximum Quantiser Step:</source>
        <translation>Максимальный шаг квантизатора:</translation>
    </message>
    <message>
        <location line="-321"/>
        <source>RDO in Quantization:</source>
        <translation>RDO квантования:</translation>
    </message>
    <message>
        <location line="+340"/>
        <source>Cb</source>
        <translation>Cb</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Cr</source>
        <translation>Cr</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>P and B-frame Quantiser Ratio:</source>
        <translation>Соотношение квантизатора P- и B-кадров:</translation>
    </message>
    <message>
        <source>Average Bitrate Tolerance:</source>
        <translation type="obsolete">Допустимый средний битрейт</translation>
    </message>
    <message>
        <location line="+48"/>
        <source>Quantiser Curve Compression</source>
        <translation>Сжатие кривых квантизатора</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Quantiser Curve Compression:</source>
        <translation>Сжатие кривых квантизатора:</translation>
    </message>
    <message>
        <location line="+45"/>
        <source>Reduce Fluctuation Before Curve Compression:</source>
        <translation>Уменьшить колебание до сжатия кривых:</translation>
    </message>
    <message>
        <location line="+70"/>
        <source>Reduce Fluctuation After Curve Compression:</source>
        <translation>Уменьшить колебание после сжатия кривых:</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Adaptive Quantisation</source>
        <translation>Адаптивное квантование</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Variance AQ:</source>
        <translation>Адаптивное квантование дисперсии:</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Normal</source>
        <translation>Нормальный</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Auto Variance AQ</source>
        <translation>Автоматич. адаптивное квантование дисперсии</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Auto-Variance Biased</source>
        <translation>Смещение авто-дисперсии</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Auto-Variance Edge</source>
        <translation>Граница авто-дисперсии</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Strength:</source>
        <translation>Уровень:</translation>
    </message>
    <message>
        <location line="+65"/>
        <source>Display</source>
        <translation>Вывод</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Color Description</source>
        <translation>Описание цвета</translation>
    </message>
    <message>
        <location line="+164"/>
        <source>The value set here will almost always be ignored in favor of the aspect ratio stored in the container.  Configure that via the options in Output Format for the muxer chosen.</source>
        <translation>Установленное здесь значение почти всегда будет игнорироваться в пользу соотношения сторон, сохранённого в контейнере. Настройте это с помощью параметров в формате выхода для выбранного мультиплексора.</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Unspecified</source>
        <comment>PAR</comment>
        <translation>Не указано</translation>
    </message>
    <message>
        <location line="+41"/>
        <source>Custom Aspect Ratio:</source>
        <comment>PAR</comment>
        <translation>Ручное соотношение сторон:</translation>
    </message>
    <message>
        <location line="+57"/>
        <source>Same as Input</source>
        <translation>Аналогичный входу</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Advanced 1</source>
        <translation>Дополнительно 1</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Video Buffer Verifier</source>
        <translation>Верификатор буфера видео (VBV)</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Maximum VBV Bitrate:</source>
        <translation>Максимальный битрейт VBV:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Initial VBV Buffer Occupancy:</source>
        <translation>Начальное заполнение буфера VBV:</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>kbit</source>
        <translation>кбит</translation>
    </message>
    <message>
        <location line="+65"/>
        <source>kbit/s</source>
        <translation>кбит/с</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>VBV Buffer Size:</source>
        <translation>Размер буфера VBV:</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Slicing</source>
        <translation>Срезание</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Slices per Frame:</source>
        <translation>Срезов на кадр:</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Maximum Size per Slice:</source>
        <translation>Максимальный размер на срез:</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>bytes</source>
        <translation>байт</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>Maximum Macroblocks per Slice:</source>
        <translation>Максимум макроблоков на срез:</translation>
    </message>
    <message>
        <location line="+58"/>
        <source>Zones</source>
        <translation>Зоны</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Add</source>
        <translation>Добавить</translation>
    </message>
    <message>
        <location line="+42"/>
        <source>Advanced 2</source>
        <translation>Дополнительно 2</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Multithreading</source>
        <translation>Многопоточность</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Disable</source>
        <translation>Отключить</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Auto-detect</source>
        <translation>Автоопределение</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Custom:</source>
        <comment>multithreading</comment>
        <translation>Вручную:</translation>
    </message>
    <message>
        <location line="+37"/>
        <source>Enforce Repeatability</source>
        <translation>Принудительная повторяемость</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Slice-based Threading</source>
        <translation>Поточность на основе срезов</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Custom Threaded Lookahead Buffer:</source>
        <translation>Ручной многопоточный буфер предсказания:</translation>
    </message>
    <message>
        <source>Output 1</source>
        <translation type="obsolete">Выход 1</translation>
    </message>
    <message>
        <location line="+59"/>
        <location line="+6"/>
        <source>Output</source>
        <translation>Выход</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Generate Access Unit Delimiters</source>
        <translation>Генерировать разделители единиц доступа</translation>
    </message>
    <message>
        <location line="-612"/>
        <source>Pixel Aspect Ratio</source>
        <translation>Соотношение сторон</translation>
    </message>
    <message>
        <source>Custom:</source>
        <comment>PAR</comment>
        <translation type="obsolete">Собственный:</translation>
    </message>
    <message>
        <source>As Input</source>
        <translation type="obsolete">Как вход</translation>
    </message>
    <message>
        <location line="+81"/>
        <source>:</source>
        <translation>:</translation>
    </message>
    <message>
        <location line="-53"/>
        <source>Predefined Aspect Ratio:</source>
        <translation>Предопределённое соотношение сторон:</translation>
    </message>
    <message>
        <source>Output 2</source>
        <translation type="obsolete">Выход 2</translation>
    </message>
    <message>
        <location line="+594"/>
        <source>Video Usability Information</source>
        <translation>Информация об использовании видео</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>These settings are only suggestions for the playback equipment.  Use at your own risk.</source>
        <translation>Эти настройки всего лишь предлагаются для воспроизведения на оборудовании. Используйте их на свой страх и риск.</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Overscan:</source>
        <translation>Пересканирование:</translation>
    </message>
    <message>
        <location line="-761"/>
        <location line="+771"/>
        <source>Undefined</source>
        <translation>Не определено</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Show</source>
        <translation>Показать</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Crop</source>
        <translation>Обрезка</translation>
    </message>
    <message>
        <location line="-733"/>
        <source>Video Format:</source>
        <translation>Формат видео:</translation>
    </message>
    <message>
        <location line="-43"/>
        <source>Component</source>
        <translation>Компонент</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>PAL</source>
        <translation>PAL</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>NTSC</source>
        <translation>NTSC</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>SECAM</source>
        <translation>SECAM</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>MAC</source>
        <translation>MAC</translation>
    </message>
    <message>
        <location line="-45"/>
        <source>Colour Primaries:</source>
        <translation>Первичные цвета:</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>Transfer Characteristics:</source>
        <translation>Характеристики перехода:</translation>
    </message>
    <message>
        <source>Linear</source>
        <translation type="obsolete">Линейный</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Colour Matrix:</source>
        <translation>Цветовая матрица:</translation>
    </message>
    <message>
        <location line="+817"/>
        <source>HRD Parameters:</source>
        <translation>Параметры HRD:</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>None</source>
        <translation>Нет</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>VBR</source>
        <translation>VBR</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>CBR</source>
        <translation>CBR</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Chroma Sample Location:</source>
        <translation>Местонахождение образца Chroma:</translation>
    </message>
    <message>
        <location line="-752"/>
        <source>Full Range Samples</source>
        <translation>Образцы полного диапазона</translation>
    </message>
</context>
<context>
    <name>x265CustomMatrixDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/x265/qt4/x265CustomMatrixDialog.ui" line="+14"/>
        <source>x265 Custom Matrix</source>
        <translation>Собственная матрица x265</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Intra 4x4</source>
        <translation>Внутренняя 4x4</translation>
    </message>
    <message>
        <location line="+28"/>
        <location line="+446"/>
        <location line="+446"/>
        <location line="+703"/>
        <source>Luma:</source>
        <translation>Яркость (luma):</translation>
    </message>
    <message>
        <location line="-1385"/>
        <location line="+446"/>
        <source>Chroma U/V:</source>
        <translation>Цветность (chroma) U/V:</translation>
    </message>
    <message>
        <location line="-238"/>
        <source>Inter 4x4</source>
        <translation>Внешняя 4x4</translation>
    </message>
    <message>
        <location line="+446"/>
        <source>Intra 8x8</source>
        <translation>Внутренняя 8x8</translation>
    </message>
    <message>
        <location line="+703"/>
        <source>Inter 8x8</source>
        <translation>Внешняя 8x8</translation>
    </message>
    <message>
        <location line="+727"/>
        <source>Load File</source>
        <translation>Загрузить файл</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>OK</source>
        <translation>Да</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Cancel</source>
        <translation>Отмена</translation>
    </message>
</context>
<context>
    <name>xvid4</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoEncoder/xvid4/xvid4Dialog.cpp" line="+32"/>
        <location line="+24"/>
        <source>None</source>
        <translation>Нет</translation>
    </message>
    <message>
        <location line="-23"/>
        <source>Low</source>
        <translation>Низкий</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Medium</source>
        <translation>Средний</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Custom</source>
        <translation>Вручную</translation>
    </message>
    <message>
        <location line="+31"/>
        <source>4:3 (PAL)</source>
        <translation>4:3 (PAL)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>4:3 (NTSC)</source>
        <translation>4:3 (PAL)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>16:9 (PAL)</source>
        <translation>16:9 (PAL)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>16:9 (NTSC)</source>
        <translation>16:9 (NTSC)</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Threading</source>
        <translation>Многопоточность</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>Motion Estimation</source>
        <translation>Определение движения</translation>
    </message>
    <message>
        <location line="+35"/>
        <location line="+17"/>
        <source>Encoding Mode</source>
        <translation>Режим кодирования</translation>
    </message>
    <message>
        <location line="-13"/>
        <source>Frame Settings</source>
        <translation>Настройки кадра</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Miscellaneous</source>
        <translation>Прочее</translation>
    </message>
    <message>
        <location line="+25"/>
        <source>Rate Control</source>
        <translation>Управление битрейтом</translation>
    </message>
    <message>
        <location line="-52"/>
        <source>Aspect Ratio:</source>
        <translation>Соотношение сторон:</translation>
    </message>
    <message>
        <location line="-68"/>
        <source>Full</source>
        <translation>Полный</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>H.263</source>
        <translation>H.263</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>MPEG</source>
        <translation>MPEG</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>DCT</source>
        <translation>DCT</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Qpel16</source>
        <translation>Qpel16</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Qpel8</source>
        <translation>Qpel8</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Square</source>
        <translation>Квадрат</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>One thread</source>
        <translation>Один поток</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Two threads</source>
        <translation>Два потока</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Three threads</source>
        <translation>Три потока</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Auto (#cpu)</source>
        <translation>Авто (по числу ядер)</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>1:1 (PC)</source>
        <translation>1:1 (ПК)</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Mi_n. quantizer:</source>
        <translation>_Мин. квантизатор:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ma_x. quantizer:</source>
        <translation>М_акс. квантизатор:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>_Trellis quantization</source>
        <translation>_Треллис-квантование</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Number of B frames:</source>
        <translation>_Число B-кадров:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Drop identical frames (this disables B-frames)</source>
        <translation>_Сбрасывать одинаковые кадры (отключает B-кадры)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Framedrop _Ratio:</source>
        <translation>_Частота выпадения кадров:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Quantization type:</source>
        <translation>_Тип квантования:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>_Macroblock decision:</source>
        <translation>_Определение макроблоков:</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Profile:</source>
        <translation>Профиль:</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>_Gop Size:</source>
        <translation>_Размер группы кадров:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Use XVID fcc (else DIVX)</source>
        <translation>Использовать XVID fcc (или DIVX)</translation>
    </message>
    <message>
        <location line="+25"/>
        <source>Quantization</source>
        <translation>Квантование</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Threads</source>
        <translation>Потоки</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Aspect Ratio</source>
        <translation>Соотношение сторон</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Xvid4 MPEG-4 ASP configuration</source>
        <translation>Настройки Xvid4 MPEG-4 ASP</translation>
    </message>
</context>
<context>
    <name>yadif</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/yadif/ADM_vidYadif.cpp" line="+132"/>
        <source>Yadif</source>
        <translation>Yadif</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Yadif, port of avisynth version (c) Fizick.</source>
        <translation>Yadif, порт версии avisynth (c) Fizick.</translation>
    </message>
    <message>
        <location line="+70"/>
        <source>Bottom field first</source>
        <translation>Нижнее поле сначала</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Top field first</source>
        <translation>Верхнее поле сначала</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>Frame : Temporal &amp; spatial check</source>
        <translation>Кадр: временная и пространственная проверка</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Field :  Temporal &amp; spatial check</source>
        <translation>Поле: временная и пространственная проверка</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Frame : Skip spatial temporal check</source>
        <translation>Кадр: пропустить пространственно-временную проверку</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Field : Skip spatial temporal check</source>
        <translation>Поле: пропустить временную и пространственную проверку</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Deint all</source>
        <translation>Деинтерлейс всего</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Deint interlaced</source>
        <translation>Деинтерлейс чересстрочности</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>_Mode:</source>
        <translation>_Режим:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Deint:</source>
        <translation>_Деинтерлейсинг:</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>_Order:</source>
        <translation>_Порядок:</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>yadif</source>
        <translation>Yadif</translation>
    </message>
</context>
<context>
    <name>zoom</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/ADM_vidZoom.cpp" line="+69"/>
        <source>Zoom</source>
        <translation>Масштабирование</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Partializable crop filter.</source>
        <translation>Фильтр частичной обрезки.</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/DIA_flyZoom.cpp" line="+480"/>
        <location line="+431"/>
        <source>Selection: </source>
        <translation>Выборка: </translation>
    </message>
    <message>
        <location line="-333"/>
        <location line="+186"/>
        <source>Preferences</source>
        <translation>Настройки</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Defaults for new filter instances</source>
        <translation>Стандартные значения новых экземпляров фильтра</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Resize method:</source>
        <translation>Метод изменения размера:</translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+18"/>
        <source>Most recently accepted</source>
        <translation>Последний использованный</translation>
    </message>
    <message>
        <location line="-17"/>
        <source>Bilinear</source>
        <translation>Билинейный</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bicubic</source>
        <translation>Бикубический</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Lanczos</source>
        <translation>Ланцош</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Spline</source>
        <translation>Сплайн</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Padding type:</source>
        <translation>Тип отступов:</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Black Bars</source>
        <translation>Чёрные полосы</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Echo</source>
        <translation>Эхо</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>None</source>
        <translation>Нет</translation>
    </message>
</context>
<context>
    <name>zoomDialog</name>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt4/zoom.ui" line="+14"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="+14"/>
        <source>Zoom</source>
        <translation>Масштабирование</translation>
    </message>
    <message>
        <location line="+38"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="+105"/>
        <source>Right:</source>
        <translation>Справа:</translation>
    </message>
    <message>
        <location line="+7"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="+42"/>
        <source>Top:</source>
        <translation>Сверху:</translation>
    </message>
    <message>
        <location line="+43"/>
        <source>Reset</source>
        <translation>Сброс</translation>
    </message>
    <message>
        <location line="+21"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="-28"/>
        <source>Bottom:</source>
        <translation>Снизу:</translation>
    </message>
    <message>
        <location line="+7"/>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="+45"/>
        <source>Left:</source>
        <translation>Слева:</translation>
    </message>
    <message>
        <location filename="../../../avidemux_plugins/ADM_videoFilters6/zoom/qt5/zoom.ui" line="-124"/>
        <source>Resize Method:</source>
        <translation>Метод изменения размера:</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Bilinear</source>
        <translation>Билинейный</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Bicubic</source>
        <translation>Бикубический</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Lanczos-3</source>
        <translation>Ланцош-3</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Spline</source>
        <translation>Сплайн</translation>
    </message>
    <message>
        <location line="+63"/>
        <source>Lock Aspect Ratio:</source>
        <translation>Фиксировать соотношение сторон:</translation>
    </message>
    <message>
        <location line="+31"/>
        <source>&amp;Hide Rubber Band</source>
        <translation>&amp;Спрятать резиновые линии</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Selection: </source>
        <translation>Выборка: </translation>
    </message>
    <message>
        <location line="+16"/>
        <location line="+4"/>
        <source>Do not lock</source>
        <translation>Свободное</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Current selection</source>
        <translation>Текущая выборка</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Source</source>
        <translation>Источник</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>21:9</source>
        <translation>21:9</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>18:9</source>
        <translation>18:9</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>16:9</source>
        <translation>16:9</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>4:3</source>
        <translation>4:3</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>1:1</source>
        <translation>1:1</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>9:16</source>
        <translation>9:16</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Padding:</source>
        <translation>Поля:</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>black bars</source>
        <translation>чёрные полосы</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>echo</source>
        <translation>эхо</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>none (stretch)</source>
        <translation>нет (растянуть)</translation>
    </message>
</context>
</TS>
