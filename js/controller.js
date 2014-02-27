function leonardoController($scope) {
    $scope.colors = [
        {
            "hex": "#000000",
            "selected": true
        },
        {
            "hex": "#000066",
            "selected": false
        },
        {
            "hex": "#0000FF",
            "selected": false
        },
        {
            "hex": "#006600",
            "selected": false
        },
        {
            "hex": "#00CC33",
            "selected": false
        },
        {
            "hex": "#660000",
            "selected": false
        },
        {
            "hex": "#CC6600",
            "selected": false
        },
        {
            "hex": "#990066",
            "selected": false
        },
        {
            "hex": "#CCFF00",
            "selected": false
        },
        {
            "hex": "#FF0066",
            "selected": false
        },
        {
            "hex": "#FF9900",
            "selected": false
        },
        {
            "hex": "#FFFF00",
            "selected": false
        }
    ];

    $scope.selectedColor = $scope.colors[0];

    $scope.setBgColor = function (color) {
        return {
            "background-color": color
        };
    }

    $scope.isSelected = function (color) {
        if (color.selected) {
            return "selected";
        } else {
            return "";
        }
    }

    $scope.selectColor = function (color) {
        if ($scope.selectedColor != null) {
            $scope.selectedColor.selected = false;
        }
        $scope.selectedColor = color;
        $scope.selectedColor.selected = true;
        $('#drawing-color').val($scope.selectedColor.hex);
        somethingChanged();
    }

    $scope.tools = {
        "brush": {
            "selected": true
        },
        "pencil": {
            "selected": false
        },
        "eraser": {
            "selected": false
        },
        "sharpener": {
            "selected": false
        },
        "floppy": {
            "selected": false
        }
    };
    $scope.selectedTool = $scope.tools.brush;
    $scope.selectTool = function (tool) {
        if (tool == $scope.tools.sharpener) {
            $scope.adjustSharpness();
            return;
        }
        if ($scope.selectedTool != null) {
            $scope.selectedTool.selected = false;
        }
        $scope.selectedTool = tool;
        $scope.selectedTool.selected = true;
        if ($scope.selectedTool == $scope.tools.brush) {
            $('#drawing-line-width').val("25");
            $('#drawing-color').val($scope.selectedColor.hex);
        } else if ($scope.selectedTool == $scope.tools.pencil) {
            $('#drawing-line-width').val("1");
            $('#drawing-color').val($scope.selectedColor.hex);
        } else if ($scope.selectedTool == $scope.tools.eraser) {
            $('#drawing-line-width').val("25");
            $('#drawing-color').val("#FFFFFF");
        }
        somethingChanged();
    }
    $scope.isToolSelected = function (tool) {
        if (tool.selected) {
            return "selected-tool";
        }
        return "";
    }
    $scope.adjustSharpness = function () {
        $('#widthModal').modal();
    }
}