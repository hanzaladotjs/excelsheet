[Start: App Loads]
    |
    v
[Step 1: Import Resources]
    ├──> [Load App.css] --> [CSS Rules Ready (e.g., input border, background)]
    └──> [Import FixedSizeGrid from react-window] --> [FixedSizeGrid Component Available]
    |
    v
[Step 2: Execute App Component]
    |
    v
[Step 3: Define Grid Constants]
    ├──> [rows = 100] --> [Total Rows Set]
    ├──> [cols = 100] --> [Total Columns Set]
    ├──> [cellWidth = 40] --> [Each Cell Width: 40px]
    └──> [cellHeight = 40] --> [Each Cell Height: 40px]
    |
    v
[Step 4: Define Cell Component]
    ├──> [Cell Function Defined] --> [Accepts columnIndex, rowIndex, style]
    └──> [Returns <div style={style}><input w-full h-full /></div>] --> [Template for Each Cell]
    |
    v
[Step 5: Build JSX Tree (Return Statement)]
    ├──> [Create Parent <div>] --> [Style: margin 2.5rem, flex column]
    └──> [Add <FixedSizeGrid> as Child] --> [Configure Grid]
    |
    v
[Step 6: Configure FixedSizeGrid]
    ├──> [columnCount = 100] --> [Grid Width: 100 × 40 = 4000px]
    ├──> [rowCount = 100] --> [Grid Height: 100 × 40 = 4000px]
    ├──> [columnWidth = 40] --> [Each Column 40px]
    ├──> [rowHeight = 40] --> [Each Row 40px]
    ├──> [height = 600] --> [Viewport Height: 600px (15 rows visible)]
    ├──> [width = 800] --> [Viewport Width: 800px (20 columns visible)]
    └──> [Children: {Cell}] --> [Pass Cell Component for Rendering]
    |
    v
[Step 7: FixedSizeGrid Renders Visible Cells]
    ├──> [Calculate Visible Area] --> [20 cols × 15 rows = 300 cells]
    └──> [For Each Visible Cell] --> [Call Cell Component]
    |
    v
[Step 8: Render Each Cell]
    ├──> [Cell Receives Props] --> [columnIndex, rowIndex, style]
    ├──> [Create <div style={style}>] --> [Position Cell (e.g., top: 0, left: 0)]
    └──> [Add <input w-full h-full />] --> [Styled by App.css (border, background)]
    |
    v
[Step 9: Apply CSS Styles]
    ├──> [input: border, background, etc.] --> [Inputs Visible with Borders]
    └──> [div: background #f9f9f9] --> [Cells Have Light Gray Background]
    |
    v
[End: Grid Rendered in Browser]
    ├──> [300 Cells Visible (20×15)]
    └──> [Scrollbars for 4000×4000px Grid]