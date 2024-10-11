# DMEditor sample

Sample for DMEditor, using tailwind for css.

_Note: DM Editor is compatible with all mainstream css frameworks, like tailwind, bootstrap css-in-js (emotion or others)._

### Short guidance

Use DM Editor:

- Initialize with loading widgets & styles & configs: [`dme-config/dmeditorInit.ts`](src/dme-config/dmeditorInit.ts)
- Load DM Editor for edit: [App.tsx](src/App.tsx#L38)

Develop style / widgets:

- Define styles:
  - Predefined: [`dme-config/dme_predefined_styles.js`](src/dme-config/dme_predefined_styles.js)
  - Categorized: [`dme-config/dme_styles.js`](src/dme-config/dme_styles.js)
- Widget sample: [`src/widgets/sample-widget`](src/widgets/sample-widget)

### Run

```
npm install
npm start
```

### Visit

http://localhost:3000
