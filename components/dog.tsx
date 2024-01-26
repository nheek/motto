export default function Dog ({customClassName = ""}) {
    return (
        <section className={`${customClassName} absolute bottom-[25%]`}>
          <svg className="sausage-dog-animation" xmlns="http://www.w3.org/2000/svg" viewBox="-50 0 1200 1080">
            <ellipse className="shadow" ry="45" rx="350" cy="816" cx="498" opacity="1" fill="#B2CAE8" fill-opacity="1" stroke="#B2CAE8" stroke-width="4" />
            <path className="tail-blur" fill="#6f5a4b" d="M 180.265,568.972 14.092,504.432 C 40.893351,428.54412 92.941075,394.6756 159.419,390.74 l 29.972,170.684 c 1.155,6.575 -2.931,9.954 -9.126,7.548 z" opacity=".296" />
            <path className="tail" fill="#6f5a4b" stroke="#6f5a4b" stroke-width="12" d="m 161.6285,568.63016 20.92664,-20.00034 C 151.50961,521.73829 14.092,504.432 14.092,504.432 c 0,0 128.8135,26.71916 147.5365,64.19816 z" />
            <g className="back-legs">
              <path fill="#9b6e34" d="M180.059 589.035h121.038l-23.651 219.517-58.432 2.217-38.955-221.734z" />
              <path fill="#9b6e34" stroke="#9b6e34" stroke-width="6" d="M270.996 760.244c-28.22 0-51.088 22.555-51.536 50.525h103.071c-.447-27.97-23.315-50.525-51.535-50.525z" />
              <path fill="#bd8b4a" d="M206.036 589.035h121.039l-23.651 219.517-58.433 2.217-38.955-221.734z" />
              <path fill="#bd8b4a" stroke="#bd8b4a" stroke-width="6" d="M296.973 760.244c-28.219 0-51.088 22.555-51.535 50.525h103.071c-.447-27.97-23.316-50.525-51.536-50.525z" />
              <path fill="#9b6e34" fill-opacity="1" stroke="#9b6e34" stroke-width="1" d="m 341.34945,810.26154 c -1.48174,-30.60183 -20.2921,-36.5324 -23.61393,-35.8329 -1.37117,0.0393 21.53672,10.53459 17.96335,35.34867 z" />
            </g>
            <g className="front-legs">
              <path className="leg" fill="#9b6e34" d="m 640.90169,580.10511 119.14374,21.32995 -61.96529,211.91363 -57.90822,-8.11489 z" />
              <path fill="#9b6e34" stroke="#9b6e34" stroke-width="6" d="m 711.354,758.244 c -28.22,0 -51.089,22.555 -51.536,50.525 h 103.071 c -0.447,-27.97 -23.316,-50.525 -51.535,-50.525 z" />
              <path fill="#bd8b4a" fill-opacity="1" stroke="#bd8b4a" stroke-width="1" d="m 760.35315,810.35988 c -1.48174,-30.60183 -20.2921,-36.5324 -23.61393,-35.8329 -1.37117,0.0393 21.53672,10.53459 17.96335,35.34867 z" />
              <path className="leg" fill="#bd8b4a" d="m 619.46642,579.5532 118.83259,23.00558 -64.94292,211.02015 -57.78921,-8.92963 z" />
              <path fill="#bd8b4a" stroke="#bd8b4a" stroke-width="6" d="m 688.228,758.24364 c -56.81455,-1.81204 -59.84071,0.90112 -51.535,50.525 h 103.071 c -0.447,-27.97 -23.33034,-49.62541 -51.536,-50.525 z" />
              <path fill="#9b6e34" fill-opacity="1" stroke="#9b6e34" stroke-width="1" d="m 734.97661,810.43045 c -1.48174,-30.60183 -20.2921,-36.5324 -23.61393,-35.8329 -1.37117,0.0393 21.53672,10.53459 17.96335,35.34867 z" />
            </g>
            <g className="lean">
              <g className="body">
                <path fill="#6f5a4b" stroke="#6f5a4b" stroke-width="3.25" d="M751.059 361.906c0-29.802 45.436-69.614 45.436-69.614s49.234-43.162 87.533-43.162c73.437 0 111.791 39.402 111.791 101.686 0 31.044-9.528 61.914-28.18 85.07-18.769 23.303-46.777 38.795-83.611 38.795-73.437 0-132.969-50.491-132.969-112.775z" />
                <path fill="#6f5a4b" stroke="#6f5a4b" stroke-width="3.25" d="M161.724 552.442c43.998-51.241 266.636-59.779 370.667-66.522 85.958-5.571 279.053-236.247 279.053-163.339 0 53.584 51.308 278.307-16.195 344.713-68.328 67.217-165.195 62.163-239.502 61.231-52.92-.663-131.793-11.253-226.832-15.838-77.24-3.727-120.165-11.768-152.525-38.198-41.065-33.54-39.869-92.695-14.666-122.047z" />
                <path fill="#695445" stroke="#695445" stroke-width="2.06" d="M412.368 528.039l22.614-14.883c5.4-3.554 14.781-6.181 20.954-5.866l13.681.698c6.173.314 15.487 2.785 20.804 5.518l20.246 10.406c5.317 2.733 11.558 9.379 13.94 14.844l2.905 6.668c2.382 5.465 2.362 14.665-.044 20.548l-1.537 3.759c-2.406 5.883-8.735 13.532-14.136 17.084l-10.784 7.093c-5.401 3.552-13.927 9.649-19.044 13.617l-11.314 8.774c-5.116 3.969-14.146 8.913-20.168 11.043l-2.382.842c-6.022 2.13-15.885 3.458-22.029 2.966l-7.054-.565c-6.145-.492-16.135-1.112-22.313-1.384l-6.765-.298c-6.178-.273-15.545-2.626-20.922-5.256l-.197-.096c-5.376-2.63-9.598-9.753-9.43-15.91l.316-11.56c.169-6.157 3.685-15.154 7.854-20.095l27.479-32.565c4.169-4.941 11.926-11.828 17.326-15.382z" />
                <path fill="#695445" stroke="#695445" stroke-width="5" d="M392.18 675.438l8.165-10.299c1.928-2.433 5.608-5.685 8.218-7.265l15.541-9.405c2.61-1.58 7.112-2.313 10.055-1.636l13.58 3.123c2.943.676 7.135 2.952 9.364 5.081l.26.249c2.229 2.13 6.286 2.86 9.063 1.631l4.337-1.919c2.776-1.229 7.431-2.671 10.398-3.221l2.133-.396c2.966-.55 7.647-.066 10.455 1.082l3.466 1.417c2.807 1.147 7.4 2.889 10.258 3.891l1.012.354c2.858 1.002 7.401 2.867 10.148 4.166l5.2 2.46c2.747 1.299 5.746 4.788 6.699 7.792l3.367 10.618c.953 3.003.26 7.492-1.548 10.025l-2.543 3.565c-1.808 2.533-5.672 5.067-8.631 5.66l-5.189 1.039c-2.96.592-7.792.868-10.795.615l-8.061-.678c-3.003-.252-7.719-1.371-10.534-2.498l-5.712-2.287c-2.815-1.127-7.323-.988-10.07.312l-5.201 2.46c-2.747 1.299-7.391 2.715-10.373 3.163l-5.106.767c-2.983.448-7.717-.001-10.574-1.002l-1.013-.355c-2.857-1.001-6.663-3.848-8.499-6.357l-.923-1.262c-1.837-2.509-5.753-4.827-8.747-5.177l-2.791-.326c-2.994-.35-7.652.409-10.405 1.695l-3.665 1.713c-2.753 1.286-6.27.145-7.855-2.547l-4.104-6.969c-1.586-2.692-1.308-6.847.62-9.279z" />
                <path fill="#695445" stroke="#695445" stroke-width="5" d="M559.503 565.641l-6.595 16.23c-1.842 4.533-3.19 12.298-3.012 17.344l.375 10.576c.179 5.045 1.874 13.072 3.787 17.928l3.273 8.314c1.913 4.856 4.607 12.825 6.018 17.799l2.271 8.005c1.411 4.973 5.602 12.104 9.361 15.927l.137.14c3.759 3.823 10.993 6.882 16.159 6.833l1.542-.015c5.166-.049 11.579-3.345 14.325-7.361l1.801-2.633c2.746-4.016 4.7-11.368 4.364-16.42l-.529-7.952c-.336-5.053-1.859-13.16-3.402-18.108l-2.384-7.645c-1.543-4.948-2.962-13.051-3.17-18.098l-.145-3.513c-.208-5.047 2.286-12.052 5.569-15.646l6.804-7.445c3.283-3.594 7.962-9.9 10.45-14.085l1.031-1.735c2.488-4.185 3.56-11.641 2.394-16.653l-.216-.927c-1.166-5.012-6.322-9.396-11.516-9.793l-10.284-.786c-5.194-.397-12.79 1.392-16.967 3.995l-20.542 12.802c-4.177 2.604-9.056 8.389-10.899 12.922z" />
                <path fill="#695445" stroke="#695445" stroke-width="5" d="M642.333 590.4l-3.736 1.374c-3.152 1.16-7.235 4.448-9.12 7.344l-3.019 4.638c-1.885 2.896-3.749 8.067-4.163 11.55l-.015.127c-.415 3.483 1.926 6.728 5.228 7.248l3.191.503c3.302.521 7.946-1.01 10.374-3.42l4.843-4.808c2.427-2.41 5.87-6.749 7.689-9.691l3.257-5.267c1.82-2.943.874-6.601-2.112-8.17l-1.304-.686c-2.987-1.569-7.962-1.902-11.113-.742z" />
                <path fill="#695445" stroke="#695445" stroke-width="5" d="M735.821 570.473l-2.761 9.352c-1.12 3.793-3.295 9.799-4.859 13.415l-1.912 4.422c-1.563 3.615-3.549 9.676-4.436 13.537l-2.091 9.107c-.887 3.861-1.31 10.195-.946 14.149l.954 10.364c.364 3.953 3.168 9.004 6.264 11.282l3.938 2.898c3.095 2.278 8.576 3.343 12.242 2.38l4.903-1.289c3.666-.963 8.744-4.081 11.343-6.965l4.222-4.685c2.599-2.883 6.122-8.075 7.87-11.596l2.76-5.56c1.747-3.521 4.176-9.415 5.424-13.164l3.042-9.135 4.653-14.673a414.246 414.246 0 004.043-13.737l2.3-8.463c1.038-3.819 1.376-10.09.755-14.008l-.023-.144c-.621-3.917-3.056-9.592-5.439-12.675l-1.217-1.575c-2.383-3.083-7.372-5.776-11.144-6.016l-11.336-.723c-3.771-.24-8.689 2.123-10.985 5.278l-11.38 15.644c-2.295 3.155-5.064 8.787-6.184 12.58z" />
                <path fill="#695445" stroke="#695445" stroke-width="5" d="M697.133 395.726l-4.154 1.378c-2.827.939-5.779 4.129-6.593 7.125l-1.595 5.868c-.814 2.997-.675 7.808.312 10.746l.971 2.893c.987 2.939 3.565 7.02 5.759 9.117l.387.37c2.194 2.096 4.591 6.236 5.355 9.247l.264 1.039a288.186 288.186 0 012.507 10.969l.023.111c.621 3.047 3.274 6.647 5.926 8.041l2.516 1.322c2.652 1.394 7.033 1.585 9.785.428l5.18-2.178c2.753-1.157 5.396-4.584 5.904-7.655l1.19-7.193c.508-3.07-.364-7.695-1.947-10.329l-3.356-5.586c-1.583-2.635-4.712-6.388-6.99-8.383l-.841-.737c-2.278-1.995-5.147-5.898-6.409-8.717l-3.774-8.429-2.901-6.099c-1.326-2.788-4.692-4.287-7.519-3.348z" />
                <path fill="#6a503e" stroke="#6a503e" stroke-width="3.25" d="M664.861 644.439l1.313 5.522c.683 2.872 2.629 7.103 4.346 9.449l1.356 1.853c1.717 2.346 3.796 6.537 4.645 9.36l1.473 4.904c.848 2.823 2.802 7.108 4.364 9.571l.402.634c1.562 2.463 5.043 5.042 7.776 5.76l2.224.584c2.732.718 7.126.585 9.814-.298l2.384-.783c2.688-.883 6.21-3.54 7.867-5.934l.06-.088c1.657-2.394 2.471-6.669 1.818-9.549l-1.424-6.29c-.653-2.88-3.028-6.626-5.306-8.368l-.083-.063c-2.278-1.741-6.306-3.859-8.998-4.729l-.098-.032c-2.692-.871-5.008-3.972-5.174-6.928l-.158-2.832c-.165-2.955-1.169-7.57-2.241-10.307l-1.419-3.622c-1.072-2.737-4.224-4.956-7.041-4.956h-6.464c-2.816 0-6.365 1.996-7.928 4.46l-1.916 3.022c-1.563 2.463-2.275 6.788-1.592 9.66z" />
                <path fill="#6a503e" stroke="#6a503e" stroke-width="3.25" d="M613.467 486.952l7.154-8.311c1.998-2.322 5.741-5.413 8.36-6.904l8.694-4.95c2.619-1.491 7.156-2.7 10.135-2.7h8.149c2.978 0 7.667.854 10.472 1.907l11.049 4.148c2.805 1.053 7.038 3.39 9.456 5.219l10.181 7.706c2.417 1.829 5.195 5.7 6.204 8.646l3.163 9.236c1.009 2.946.788 7.625-.492 10.452l-2.937 6.483c-1.28 2.826-4.478 6.253-7.142 7.653l-7.016 3.687c-2.664 1.4-7.216 2.192-10.167 1.769l-5.975-.856c-2.952-.423-6.793-2.796-8.58-5.301l-.345-.484c-1.787-2.504-5.598-5.058-8.513-5.703l-3.836-.848c-2.914-.645-7.667-1.527-10.616-1.97l-5.228-.785c-2.948-.443-7.472-1.989-10.105-3.454l-3.343-1.861c-2.632-1.464-5.846-4.922-7.178-7.723l-2.75-5.781c-1.332-2.801-.792-6.953 1.206-9.275z" />
                <path fill="#695445" stroke="#695445" stroke-width="5" d="M170.831 603.353l.036.168c.963 4.585 5.343 9.913 9.784 11.901l12.456 5.577c4.441 1.988 11.079 1.153 14.827-1.865l4.872-3.923c3.748-3.018 7.772-9.137 8.988-13.666l3.124-11.635c1.216-4.53 1.894-11.981 1.514-16.643l-1-12.27c-.38-4.662-4.47-9.615-9.135-11.063l-5.416-1.681c-4.666-1.448-10.599.567-13.253 4.5l-23.735 35.178c-2.654 3.933-4.024 10.838-3.062 15.422z" />
                <path fill="#6a503e" stroke="#6a503e" stroke-width="3.25" d="M241.079 650.195l-.098.182c-2.672 4.972-2.692 13.043-.044 18.026l1.093 2.057c2.648 4.983 9.433 10.007 15.156 11.221l.725.153c5.722 1.214 15.037 1.391 20.805.395l2.519-.435c5.769-.995 14.813-3.586 20.201-5.786l10.199-4.164c5.388-2.201 6.741-7.484 3.021-11.802l-4.975-5.775c-3.719-4.318-11.378-6.853-17.106-5.663l-1.416.294c-5.727 1.189-14.926.866-20.546-.723l-14.52-4.105c-5.62-1.589-12.342 1.154-15.014 6.125z" />
                <path fill="#695445" stroke="#695445" stroke-width="2.06" d="M285.533 601.722l2.531.752c6.313 1.873 16.766 2.894 23.347 2.279l6.145-.573c6.58-.615 14.577-5.546 17.861-11.015l4.963-8.266c3.283-5.47 7.431-14.811 9.264-20.865l.956-3.156c1.833-6.054.418-15.257-3.16-20.555l-.131-.194c-3.579-5.299-11.835-9.374-18.442-9.102l-.497.02c-6.606.272-16.544 3.142-22.196 6.412l-2.648 1.531c-5.652 3.269-13.729 9.793-18.04 14.57l-.678.751c-4.311 4.778-12.358 11.347-17.974 14.673l-5.244 3.106c-5.616 3.326-11.168 11.041-12.401 17.231l-.352 1.765c-1.233 6.191.669 15.504 4.248 20.802l.131.194c3.578 5.299 9.196 5.191 12.548-.241l2.269-3.676c3.351-5.432 11.186-8.316 17.5-6.443z" />
                <path fill="#ff4e47" stroke="#ff4e47" stroke-width="28" d="M 707.78417,358.59878 846.34934,503.2334" />
              </g>
              <g className="head">
                <path fill="#bd8b4a" d="M911.034 474.462l58.711 25.635c3.998 1.746 10.859 2.947 15.323 2.683l8.328-.493c4.465-.264 10.914-2.315 14.884-4.112l7.47-3.676c3.97-1.797 10.92-4.795 14.4-7.235l14.84-10.392c3.48-2.441 8.1-7.154 10.33-10.528l7.47-11.338c2.22-3.374 3.57-6.514 3.01-7.015 0 0-89.032-79.584-89.326-80.524" />
                <path fill="#bd8b4a" d="M913.883 547.305C869.89 505.578 853.078 442.761 876.334 407c23.255-35.762 77.772-30.925 121.766 10.802 43.99 41.727 62.76 40.306 62.76 40.306-23.26 35.762-102.983 130.924-146.977 89.197z" />
                <path fill="#bd8b4a" d="m 878.57469,361.46519 c -3.549,8.006 18.32731,62.81481 18.32731,62.81481 0,0 -5.576,45.517 7.976,50.611 1.64,0.617 9.306,-0.397 19.932,-4.902 30.681,-13.007 85.9,-42.08 90.94,-42.892 3.24,-0.523 -36.398,-6.798 -33.634,-8.579 11.678,-7.525 16.195,-66.177 16.195,-66.177 0,0 0.84,-18.025 -3.737,-33.088 -3.332,-10.962 -11.307,-21.389 -20.966,-26.835 -4.181,-2.358 -8.527,-2.554 -13.033,-3.118 -9.386,-1.176 -17.697,-0.873 -26.857,2.227 -20.387,6.897 -64.15231,47.92519 -55.14331,69.93819" />
                <g className="eye">
                  <ellipse ry="58.79958" rx="63.385227" cy="337.63333" cx="930.31775" opacity="1" fill="#6f5a4b" fill-opacity="1" stroke="#6f5a4b" stroke-width="7" />
                  <path fill="#fff" stroke="#fff" stroke-width="3.25" d="M917.372 339.256c0-19.15 15.843-34.674 35.388-34.674 19.544 0 35.388 15.524 35.388 34.674 0 19.149-15.844 34.673-35.388 34.673-12.483 0-23.457-6.332-29.757-15.898a34.015 34.015 0 01-5.631-18.775z" />
                  <path fill="#262626" stroke="#262626" d="M953.463 334.106c0-8.041 6.456-14.56 14.421-14.56 7.965 0 14.421 6.519 14.421 14.56s-6.456 14.559-14.421 14.559c-7.965 0-14.421-6.518-14.421-14.559z" />
                  <path fill="#fff" stroke="#fff" stroke-width="5" d="M972.119 327.418c0-.661.711-1.197 1.589-1.197.877 0 1.589.536 1.589 1.197s-.712 1.197-1.589 1.197c-.878 0-1.589-.536-1.589-1.197z" />
                  <g className="closed-eye" fill="#6a503e" stroke="#4a392c" stroke-width="3">
                    <path d="M917.003 339.068c0-19.357 16.007-35.048 35.754-35.048 19.746 0 35.753 15.691 35.753 35.048 0 19.356-16.007 35.048-35.753 35.048-12.612 0-23.699-6.401-30.064-16.07a34.386 34.386 0 01-5.69-18.978z" />
                    <path d="M923.322 358.879c.132-4.19 10.549-11.275 13.553-13.265 11.34-7.511 24.072-11.238 37.223-13.485 4.288-.732 8.655-.216 12.924-.697" />
                  </g>
                </g>
                <g className="nose">
                  <path fill="#4a392c" d="M1035.88 441.045c5.38-8.889 16.28-12.745 24.36-8.614 8.08 4.131 10.27 14.686 4.89 23.574-5.38 8.889-16.29 12.746-24.37 8.615-8.07-4.131-10.26-14.686-4.88-23.575z" />
                  <path fill="#fff" stroke="#fff" stroke-width="1.74" d="M1051.34 441.56c.03 2.329 2.27-.018 2.64-1.768.18-.862-1.8 2-.93 2.516 1.16.684 2.36-2.411 1.42-3.282-2.95-2.722-2.72 7.429-1.07 3.998 1.03-2.155-5.45 3.379-3.62-2.029 2.85-8.382 9.1 2.281 2.45 3.226-4.55.645-3.63-8.619 2.7-6.739 4.48 1.33-.01 5.966-3.4 5.448-5.35-.818.82-8.238 3.9-4.094" opacity=".965" />
                </g>
                <g>
                  <path className="ball" fill="#bdf971" stroke="#bdf971" d="m 930.80242,477.19065 c -13.05851,3.00801 -24.77881,15.97694 -26.81485,30.67673 -2.03603,14.69979 5.61282,31.12503 15.54844,43.47271 9.93563,12.34768 22.15522,20.61485 36.12779,24.29677 13.97258,3.68192 29.69644,2.77869 42.91157,-2.81649 13.21513,-5.59518 23.92113,-15.88139 30.65943,-28.14324 6.7383,-12.26185 9.5079,-26.49697 5.7369,-38.5172 -3.771,-12.02022 -14.0825,-21.82316 -25.5603,-24.46605 -11.47786,-2.6429 -24.12011,1.87601 -37.63861,0.6591 -13.5185,-1.21691 -27.91187,-8.17033 -40.97037,-5.16233 z" />
                  <clipPath id="ballClip">
                    <path className="ball" fill="#bdf971" stroke="#bdf971" d="m 930.80242,477.19065 c -13.05851,3.00801 -24.77881,15.97694 -26.81485,30.67673 -2.03603,14.69979 5.61282,31.12503 15.54844,43.47271 9.93563,12.34768 22.15522,20.61485 36.12779,24.29677 13.97258,3.68192 29.69644,2.77869 42.91157,-2.81649 13.21513,-5.59518 23.92113,-15.88139 30.65943,-28.14324 6.7383,-12.26185 9.5079,-26.49697 5.7369,-38.5172 -3.771,-12.02022 -14.0825,-21.82316 -25.5603,-24.46605 -11.47786,-2.6429 -24.12011,1.87601 -37.63861,0.6591 -13.5185,-1.21691 -27.91187,-8.17033 -40.97037,-5.16233 z" />
                  </clipPath>
                  <path className="ball-decoration" clip-path="url(#ballClip)" fill="none" stroke="#fff" stroke-width="4" d="m 963.39546,597.71943 c 21.49913,-19.30313 4.80913,-64.80408 16.71919,-83.46282 16.19467,-25.37116 67.93925,-22.92156 89.43095,-47.68524" />
                  <g className="ball-sound">
                    <path fill="none" stroke="#B5D8E8" stroke-width="4" d="m 1096.3827,564.72204 c 11.3886,12.59779 6.8073,-1.45406 10.931,-3.9212 1.9116,-1.14344 5.2815,9.1526 9.7911,16.39495 0.2794,0.44804 0.3148,-1.06074 0.4718,-1.59122 0.9548,-3.21847 1.6781,-12.7846 4.2464,-14.32081 2.4235,-1.4498 4.5316,8.986 8.6637,9.21558 5.7286,0.31843 3.6488,-6.24515 5.8457,-8.73267 1.4614,-1.65478 3.9233,1.78478 6.0289,1.62906 4.8167,-0.35637 4.1527,-6.99656 8.0084,0.44507" />
                    <path fill="none" stroke="#B5D8E8" stroke-width="4" d="m 1070.9116,599.79298 c -2.9954,2.45576 -9.6186,6.11285 -7.2109,10.56543 0.5391,0.99715 13.1337,-2.24375 13.7587,-2.44022 0.5954,-0.18689 1.7073,-1.42002 1.6666,-0.90122 -0.083,1.06689 -3.3427,7.9055 -1.5136,9.15131 2.703,1.84098 10.413,-0.47946 10.1532,2.84261 -0.344,4.40226 -7.7885,9.49729 -5.8163,13.14464 1.3149,2.43155 6.6186,0.47256 9.456,1.55305 4.0577,1.54512 -3.7339,7.61167 2.5171,8.63834" />
                  </g>
                </g>
                <path fill="#695445" stroke="#695445" stroke-width="3.25" d="M894.558 290.191l5.447-7.287c.796-1.066 2.311-2.539 3.384-3.291l5.204-3.647c1.073-.751 2.934-1.708 4.157-2.137l6.932-2.428c1.223-.429 3.224-.493 4.47-.144l6.85 1.92c1.246.349 2.667 1.642 3.175 2.888l.433 1.062c.508 1.245.24 3.089-.599 4.118l-1.506 1.847c-.839 1.029-2.454 2.354-3.608 2.961l-8.515 4.475-3.971 2.087c-1.154.606-2.741 1.956-3.547 3.014l-4.601 6.045-3.025 3.71c-.839 1.029-2.558 1.984-3.839 2.134l-2.176.254c-1.282.15-3.06-.506-3.971-1.464l-.486-.51c-.912-.959-2.018-2.764-2.47-4.033l-.633-1.774c-.453-1.269-.408-3.307.1-4.553l.433-1.062c.508-1.246 1.565-3.119 2.362-4.185z" />
                <g className="ear">
                  <path fill="#554132" d="M899.667 340.093c-18.458-82.741-41.446-100.776-75.085-74.525-35.063 27.363-93.432 28.614-74.975 111.355 18.457 82.741 67.012 141.572 108.449 131.401 41.438-10.17 60.068-85.49 41.611-168.231z" />
                  <path fill="#4a392c" stroke="#4a392c" stroke-width="3.55" d="M771.398 397.916l-.417 2.678c-.344 2.211.02 5.69.813 7.77l.614 1.609c.793 2.08 2.61 5.099 4.059 6.743l1.036 1.176a113.619 113.619 0 005.474 5.712l3.036 2.913c1.575 1.511 3.888 4.189 5.167 5.981l.047.066c1.279 1.793 3.799 4.178 5.63 5.327l1.699 1.067c1.83 1.149 4.911 2.774 6.881 3.629l6.158 2.674 6.859 2.695c1.997.784 5.282 1.902 7.338 2.497l3.679 1.064c2.056.595 5.445 1.213 7.571 1.38l6.965.549 9.208.371c2.13.086 5.581.038 7.709-.108l2.904-.199c2.128-.145 5.485-.858 7.499-1.592l3.653-1.331c2.014-.734 5.05-2.389 6.781-3.697l5.562-4.202c1.731-1.308 3.794-4.047 4.608-6.118l1.07-2.723c.814-2.071 1.239-5.549.949-7.769l-.289-2.215c-.29-2.22-1.202-5.691-2.037-7.753l-.359-.885c-.835-2.062-2.629-5.119-4.008-6.829l-3.889-4.823-3.114-4.076c-1.335-1.747-4.006-3.877-5.966-4.758l-1.023-.46c-1.96-.881-5.239-1.978-7.323-2.451l-4.892-1.109-4.17-1.093a107.68 107.68 0 01-7.401-2.285l-3.915-1.398a183.715 183.715 0 01-7.245-2.794l-5.752-2.388c-1.983-.823-5.273-1.906-7.348-2.418l-2.754-.681a176.174 176.174 0 01-7.466-2.057l-10.622-3.234-5.07-1.592c-2.043-.642-5.417-1.359-7.536-1.602l-1.639-.188c-2.119-.243-4.799 1.069-5.986 2.931l-.779 1.223c-1.187 1.861-2.653 5.108-3.275 7.251l-.912 3.142c-.622 2.143-2.333 5.18-3.822 6.784l-.64.688c-1.489 1.604-2.976 4.696-3.32 6.908z" />
                  <path fill="#6a503e" stroke="#6a503e" stroke-width="3.25" d="M818.613 319.578l-3.003 6.664c-.639 1.418-1.214 3.839-1.284 5.407l-.428 9.507-.135 10.621.142 9.336c.024 1.569.501 4.019 1.066 5.472l2.902 7.46c.565 1.453 1.687 3.695 2.506 5.007l2.82 4.52c.819 1.312 2.465 3.12 3.676 4.038l3.88 2.939c1.211.918 3.402 1.601 4.893 1.525l3.803-.193c1.491-.076 3.62-.964 4.755-1.984l4.39-3.945c1.135-1.02 2.43-3.056 2.892-4.549l1.583-5.112c.462-1.493 1.038-3.957 1.287-5.505l1.136-7.078c.248-1.548.456-4.075.464-5.644l.045-8.997c.008-1.569-.242-4.085-.558-5.619l-1.903-9.229c-.316-1.534-1.056-3.944-1.652-5.383l-2.468-5.954c-.596-1.439-1.866-3.573-2.836-4.766l-3.753-4.614c-.97-1.193-2.94-2.43-4.399-2.762l-3.66-.833c-1.459-.332-3.767-.131-5.154.449l-3.538 1.479c-1.387.58-3.354 1.964-4.393 3.092l-.038.041c-1.039 1.127-2.399 3.191-3.038 4.61z" />
                  <path fill="#695445" stroke="#695445" stroke-width="2.06" d="M828.818 330.254l-.037.064c-1.036 1.741-2.292 4.758-2.806 6.739l-.411 1.584c-.514 1.981-1.088 5.243-1.282 7.286l-.054.563c-.194 2.043.417 5.154 1.366 6.949l.352.666c.948 1.795 3.275 2.952 5.197 2.584l1.372-.262c1.922-.367 4.493-1.943 5.744-3.521l3.045-3.841c1.251-1.578 2.908-4.378 3.701-6.254l.157-.37c.793-1.877 1.747-5.03 2.13-7.043l.127-.671c.384-2.013-.603-4.6-2.203-5.777l-1.779-1.309c-1.601-1.178-4.463-1.879-6.394-1.567l-2.854.462c-1.931.312-4.335 1.977-5.371 3.718z" />
                </g>
              </g>
            </g>
          </svg>
        </section>
    );
}