Search.setIndex({"docnames": ["design", "design/element", "design/material", "design/node", "design/plotter", "design/solver", "design/system", "examples", "examples/beam_examples", "examples/continuum_examples", "examples/frame_examples", "examples/frames/frame01/frame01", "examples/frames/frame02/frame02", "examples/frames/frame03/frame03", "examples/frames/frame04/frame04", "examples/mixed_structures_examples", "examples/plate_examples", "examples/truss_examples", "examples/trusses/truss01/truss01", "examples/trusses/truss02/truss02", "examples/trusses/truss03/truss03", "examples/trusses/truss04/truss04", "general/about", "general/welcome", "implementation", "implementation/Beam2D_class", "implementation/DOF_class", "implementation/ElasticSection", "implementation/ElementPlotter3D_class", "implementation/ElementPlotter_class", "implementation/Element_class", "implementation/FiberMaterial", "implementation/FiberSection", "implementation/Frame2D_class", "implementation/LinearSolver_class", "implementation/LinearTriangle_class", "implementation/Material_class", "implementation/NewtonRaphsonSolver_class", "implementation/Node_class", "implementation/PlaneStrain", "implementation/PlaneStress", "implementation/PlateSection", "implementation/Plot_Support_Classes", "implementation/Plotter3D_class", "implementation/Plotter_class", "implementation/Sections", "implementation/Solver_class", "implementation/System_class", "implementation/Transformation_class", "implementation/Truss_class", "index"], "filenames": ["design.rst", "design/element.rst", "design/material.rst", "design/node.rst", "design/plotter.rst", "design/solver.rst", "design/system.rst", "examples.rst", "examples/beam_examples.rst", "examples/continuum_examples.rst", "examples/frame_examples.rst", "examples/frames/frame01/frame01.rst", "examples/frames/frame02/frame02.rst", "examples/frames/frame03/frame03.rst", "examples/frames/frame04/frame04.rst", "examples/mixed_structures_examples.rst", "examples/plate_examples.rst", "examples/truss_examples.rst", "examples/trusses/truss01/truss01.rst", "examples/trusses/truss02/truss02.rst", "examples/trusses/truss03/truss03.rst", "examples/trusses/truss04/truss04.rst", "general/about.rst", "general/welcome.rst", "implementation.rst", "implementation/Beam2D_class.rst", "implementation/DOF_class.rst", "implementation/ElasticSection.rst", "implementation/ElementPlotter3D_class.rst", "implementation/ElementPlotter_class.rst", "implementation/Element_class.rst", "implementation/FiberMaterial.rst", "implementation/FiberSection.rst", "implementation/Frame2D_class.rst", "implementation/LinearSolver_class.rst", "implementation/LinearTriangle_class.rst", "implementation/Material_class.rst", "implementation/NewtonRaphsonSolver_class.rst", "implementation/Node_class.rst", "implementation/PlaneStrain.rst", "implementation/PlaneStress.rst", "implementation/PlateSection.rst", "implementation/Plot_Support_Classes.rst", "implementation/Plotter3D_class.rst", "implementation/Plotter_class.rst", "implementation/Sections.rst", "implementation/Solver_class.rst", "implementation/System_class.rst", "implementation/Transformation_class.rst", "implementation/Truss_class.rst", "index.rst"], "titles": ["Program Design", "Element", "Material", "Node", "Plotter", "Solver", "System", "Example Problems", "Beam Examples", "Continuum Examples", "Frame Examples", "Example: frame01", "Example: frame01", "Example: frame03", "Example: frame04", "Mixed Structures Examples", "Plate Examples", "Truss Examples", "Example: truss01", "Example: truss02", "Example: truss03", "Example: truss04", "About the Developers", "Welcome to the FEM.edu documentation!", "Implementation", "Beam2D class", "DoF class", "ElasticSection", "ElementPlotter3D class", "ElementPlotter class", "Element classes", "FiberMaterial material class", "FiberSection", "Frame2D class", "Linear Solver class", "LinearTriangle class", "Material class", "Newton-Raphson Solver class", "Node class", "PlaneStrain material class", "PlaneStress material class", "PlateSection", "Plot Support classes", "Plotter3D class", "Plotter class", "Section Material classes", "Solver class", "System class", "Transformation class", "Truss class", "Welcome to the FEM.edu documentation!"], "terms": {"The": [0, 4, 25, 27, 29, 30, 32, 33, 34, 37, 38, 41, 46, 47, 49], "goal": 0, "i": [0, 2, 3, 4, 5, 25, 27, 29, 30, 32, 33, 38, 41, 42, 43, 44, 45, 47, 48, 49], "creat": [0, 4, 5, 6, 29, 42, 43, 44, 47], "an": [0, 1, 5, 6, 30, 37, 42, 45, 46, 47, 48], "object": [0, 1, 4, 5, 6, 23, 25, 33, 38, 43, 44, 47, 49, 50], "orient": 0, "finit": [0, 23, 29, 50], "element": [0, 4, 5, 6, 23, 24, 25, 29, 33, 34, 35, 37, 38, 42, 45, 46, 47, 48, 49, 50], "analysi": [0, 23, 37, 46, 50], "base": [0, 4, 29, 42, 45, 47], "method": [0, 24, 29, 34, 38, 42, 46, 47], "handl": [0, 6], "arbitrari": [0, 23, 50], "truss": [0, 1, 6, 7, 11, 12, 13, 14, 18, 19, 20, 21, 23, 24, 30, 35, 50], "2d": [0, 23, 25, 33, 39, 40, 49, 50], "allow": 0, "load": [0, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 30, 33, 34, 37, 38, 46, 47, 48, 50], "can": [0, 30, 38, 42], "plot": [0, 4, 5, 6, 23, 24, 28, 29, 30, 43, 44, 46, 47, 50], "its": [0, 1, 30], "undeform": [0, 4, 30, 47], "deform": [0, 3, 4, 11, 12, 13, 14, 19, 23, 25, 29, 30, 38, 42, 43, 44, 45, 47, 49, 50], "shape": [0, 4, 11, 12, 13, 14, 19, 30, 38, 46, 47], "need": [0, 1, 3, 4, 29, 30, 37, 38, 46], "us": [0, 1, 5, 8, 9, 10, 15, 16, 17, 25, 29, 30, 33, 34, 37, 38, 42, 43, 44, 45, 46, 47, 48, 49], "follow": [0, 45, 49], "node": [0, 1, 4, 5, 6, 24, 25, 26, 29, 30, 33, 34, 37, 42, 46, 47, 48, 49], "materi": [0, 1, 23, 24, 25, 27, 30, 32, 33, 35, 41, 49, 50], "system": [0, 3, 4, 11, 12, 13, 14, 19, 24, 29, 30, 34, 37, 38, 42, 43, 44, 46], "solver": [0, 6, 23, 24, 47, 50], "plotter": [0, 5, 6, 24, 28, 29, 42, 43], "each": [1, 3, 4, 5], "instanc": [1, 3, 5, 6, 32, 41, 47], "repres": [1, 3, 4, 25, 26, 30, 31, 33, 35, 36, 38, 39, 40, 43, 44, 45, 47, 49], "one": [1, 3, 5, 6, 42, 47], "member": 1, "input": [1, 2, 3, 4, 5, 6, 17, 27, 32, 41], "return": [1, 2, 3, 4, 5, 6, 25, 30, 31, 33, 36, 38, 39, 40, 46, 47, 49], "descript": [1, 2, 3, 4, 5, 6, 8, 9, 10, 15, 16, 17, 38], "__init__": [1, 2, 3, 4, 5, 6], "nd0": 1, "nd1": 1, "two": [1, 3, 4], "constructor": [1, 2, 3, 4, 5, 6, 30], "getforc": [1, 5, 30], "list": [1, 3, 4, 5, 6, 25, 26, 29, 30, 33, 34, 37, 38, 42, 46, 47, 49], "1d": [1, 23, 31, 50], "np": [1, 3, 4, 5, 25, 33, 49], "arrai": [1, 3, 4, 5, 25, 29, 33, 38, 40, 42, 44, 47, 49], "A": [1, 2, 23, 27, 29, 30, 31, 34, 36, 37, 38, 45, 46, 47, 48, 50], "nodal": [1, 3, 5, 6, 25, 29, 30, 33, 38, 42, 43, 44, 48, 49], "forc": [1, 3, 4, 5, 6, 19, 23, 25, 27, 29, 30, 32, 33, 34, 37, 41, 42, 43, 44, 46, 49, 50], "shall": [1, 4, 30, 38, 46, 47, 48], "compon": [1, 3, 40, 41], "getstiff": [1, 2, 5, 30, 36], "2": [1, 2, 4, 5, 32, 40, 41, 49], "matrix": [1, 46], "contain": [1, 4, 5], "tangent": [1, 2, 25, 32, 33, 36, 41, 46, 49], "matric": 1, "note": [1, 3], "mai": [1, 25, 29, 33, 34, 45, 46, 48], "have": [1, 3, 42], "chang": [1, 25, 27, 32, 33, 41, 47], "state": [1, 2, 22, 25, 29, 31, 36, 39, 40, 47, 49], "between": [1, 45, 49], "call": [1, 30, 37, 38], "so": [1, 3, 42, 47], "you": 1, "recomput": [1, 5], "everi": [1, 30], "time": [1, 23, 50], "name": [1, 2, 3, 4, 5, 6], "type": [1, 2, 3, 4, 5, 6, 26, 30, 46, 47], "either": [1, 45], "end": [1, 4, 40], "pointer": [1, 6, 25, 33, 34, 37, 38, 42, 46, 47, 49], "comput": [1, 5, 6, 25, 33, 41, 46, 49], "stress": [1, 2, 23, 30, 36, 39, 40, 41, 50], "modulu": [1, 2], "hold": [1, 2, 3, 5, 6], "p0": [1, 34, 37, 46], "p1": 1, "kt": [1, 25, 33, 49], "stiff": [1, 2, 5, 25, 27, 32, 33, 36, 41, 46, 49], "all": [1, 2, 5, 6, 8, 9, 10, 15, 16, 17, 30, 38, 42, 45, 46, 48], "equat": [1, 2, 3, 5, 47], "bf": [1, 3, 5, 34, 38, 46], "l": 1, "x": [1, 3, 4, 25, 33, 38], "_1": [1, 3], "_0": [1, 3], "ell": 1, "n": [1, 30, 31, 39, 40, 41], "frac": [1, 2, 40], "1": [1, 2, 3, 5, 6, 25, 29, 30, 31, 33, 36, 38, 39, 40, 42, 45, 46, 47], "strain": [1, 2, 23, 27, 31, 32, 36, 39, 40, 41, 50], "varepsilon": [1, 2, 27, 32, 41], "cdot": 1, "u": [1, 3, 4, 5, 6, 33, 34, 38, 49], "f": [1, 2, 5, 6, 27, 32, 38, 46], "sigma": [1, 2, 32, 36, 41], "setstrain": [1, 2, 36, 39], "ep": [1, 2, 31, 36, 39, 40], "getstress": [1, 2, 36], "vector": [1, 3, 4, 5, 25, 29, 30, 33, 34, 37, 38, 42, 44, 46, 47, 49], "p": [1, 5, 6, 23, 33, 34, 40, 50], "e": [1, 2, 8, 9, 10, 15, 16, 17, 27, 30, 31, 36, 38, 39, 40, 42, 45, 46, 47], "k": [1, 5, 34, 46], "e_t": [1, 2], "otim": 1, "find": [1, 47], "_": [1, 5, 41], "00": 1, "11": [1, 5], "01": [1, 23, 50], "10": [1, 2, 37], "thi": [2, 3, 4, 5, 30, 32, 34, 38, 41, 42, 46, 47], "provid": [2, 3, 25, 30, 31, 33, 36, 38, 39, 40, 42, 47], "demonstr": 2, "exampl": [2, 50], "paramet": [2, 25, 27, 29, 30, 31, 34, 36, 37, 38, 39, 40, 42, 43, 44, 46, 47], "0": [2, 3, 5, 6, 25, 29, 30, 31, 33, 36, 38, 39, 40, 41, 42, 45, 46, 47], "set": [2, 3, 4, 5, 30, 37, 38, 46, 47], "initi": [2, 3, 4, 34, 37, 38, 46, 47], "intern": [2, 3, 29, 30, 34, 37, 42, 43, 44, 46], "getarea": 2, "cross": [2, 32, 41, 45], "section": [2, 23, 24, 25, 27, 32, 33, 36, 41, 50], "area": 2, "from": [2, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 29, 30, 32, 34, 37, 41, 42, 45, 47], "request": [2, 5, 6, 30, 36, 38, 46], "axial": [2, 10, 19, 23, 27, 31, 32, 33, 36, 39, 40, 41, 45, 49, 50], "updat": [2, 5, 6, 31, 34, 36, 37, 39, 40, 46, 47], "user": [2, 4, 23, 29, 30, 31, 36, 38, 39, 40, 48, 50], "valu": [2, 4, 25, 29, 30, 31, 33, 36, 38, 39, 40, 42, 46, 47, 49], "param": [2, 27, 31, 36, 39, 40, 45], "dict": 2, "default": [2, 3, 4, 29, 30, 33, 46, 47], "100": 2, "nu": [2, 31, 36, 39, 40, 45], "fy": [2, 31, 36, 39, 40, 45], "0e30": 2, "moe": 2, "poisson": 2, "": [2, 5, 25, 33, 34, 37, 38, 42, 46], "ratio": [2, 42], "yield": 2, "plastic_strain": 2, "float": [2, 3, 26, 49], "sig": 2, "current": [2, 3, 8, 9, 10, 15, 16, 17, 25, 26, 30, 34, 37, 38, 46, 47, 49], "et": [2, 36], "materil": 2, "elast": [2, 25, 27, 33, 45], "trial": 2, "varepsilon_p": 2, "check": 2, "f_y": 2, "IF": 2, "ge": 2, "3": 2, "delta": [2, 23, 33, 50], "text": [2, 47], "sign": 2, "y": [3, 4, 25, 33, 38], "coordin": [3, 4, 30, 38], "point": [3, 4, 8, 25, 30, 38], "posit": [3, 4, 5, 6, 25, 38, 49], "displac": [3, 4, 5, 6, 23, 25, 26, 29, 33, 34, 37, 38, 42, 46, 47, 50], "zero": [3, 5, 38, 46, 47], "fixdof": [3, 38], "idx": 3, "degre": [3, 26], "freedom": [3, 26], "dof": [3, 24, 25, 30, 33, 38, 47, 49], "flag": 3, "accordingli": 3, "isfix": [3, 26, 38], "true": [3, 29, 37, 38, 42, 43, 44, 46, 47], "fals": [3, 4, 29, 30, 34, 37, 38, 42, 43, 44, 46, 47], "test": [3, 10], "function": [3, 29, 30, 37, 46, 47], "fix": [3, 5, 23, 38, 50], "otherwis": 3, "setdisp": [3, 5, 38], "v": [3, 4, 5, 25, 33, 49], "overwrit": 3, "getdisp": [3, 38], "getpo": [3, 38], "getdeformedpo": [3, 38], "factor": [3, 5, 6, 29, 30, 38, 42, 46, 47], "magnifi": 3, "would": 3, "good": 3, "none": [3, 4, 29, 30, 38, 42, 43, 44, 47], "given": [3, 4, 29, 30, 34, 38, 42, 43, 44, 47], "addload": [3, 38], "px": 3, "py": 3, "add": [3, 4, 5, 6, 29, 42, 43, 44, 47], "setload": [3, 38], "replac": [3, 4, 46], "getload": [3, 5, 30, 38], "po": 3, "index": [3, 5, 46, 47, 50], "int": [3, 26, 37], "addnod": [3, 5, 6, 47], "thisnod": 3, "team": 3, "disp": [3, 4, 5, 26, 42, 44], "fixiti": [3, 26, 48], "th": 3, "sensibl": 4, "setmesh": [4, 42, 44], "vert": [4, 44], "line": [4, 30, 44], "indic": [4, 5, 23, 26, 29, 38, 42, 43, 44, 47], "self": [4, 25, 26, 30, 33, 38, 49], "vertic": 4, "inform": [4, 29, 37, 42], "setdisplac": [4, 42, 44], "setvalu": [4, 42, 44], "val": [4, 25, 33, 42, 44], "displacementplot": [4, 29, 42, 43, 44], "file": [4, 29, 42, 43, 44, 47], "string": [4, 8, 9, 10, 15, 16, 17, 29, 42, 47], "show": [4, 46, 47], "black": 4, "model": [4, 5, 6, 23, 29, 32, 33, 41, 47, 49, 50], "red": 4, "If": [4, 5, 29, 30, 38, 42, 43, 44, 46, 47, 48], "save": [4, 26, 47], "copi": 4, "valueplot": [4, 29, 42, 43, 44, 47], "color": [4, 29, 42, 43, 44, 47], "colormap": 4, "colorbar": 4, "legend": 4, "pair": 4, "start": [4, 30, 47], "respect": [4, 29, 46, 47], "must": 4, "ident": 4, "entri": 4, "newnod": [5, 6, 47], "your": [5, 6], "addel": [5, 6, 47], "newelem": [5, 6], "solv": [5, 6, 34, 37, 46, 47], "assembl": [5, 6, 34, 37, 46], "k_t": [5, 6], "loop": [5, 6], "through": [5, 6, 29, 30, 41, 42], "unbalanc": [5, 6], "r": [5, 6, 29, 42, 44, 46], "collect": [5, 6], "info": [5, 6, 46], "send": [5, 6, 38], "report": [5, 6, 23, 38, 47, 50], "print": [5, 6, 8, 9, 10, 15, 16, 17, 47], "summari": [5, 6, 47], "size": 5, "ha": [5, 38, 47], "node0": [5, 35], "elem": [5, 42], "node1": [5, 35], "j": [5, 25, 33, 49], "local": [5, 25, 30, 38], "d": [5, 22, 32, 38, 41, 46], "o": [5, 38, 46], "belong": [5, 26], "global": [5, 30, 46], "4": 5, "m": [5, 27, 32, 41], "assembli": [5, 38], "sy": 5, "over": [5, 41, 47], "should": [5, 30, 38], "0e20": 5, "step": [5, 23, 50], "5": 5, "6": 5, "do": [5, 38], "repeat": 5, "7": 5, "everyth": 5, "wa": 5, "done": 5, "correctli": 5, "support": [5, 24, 28, 29, 43, 44], "reaction": 5, "free": 5, "numer": [5, 23, 41, 50], "beam": [7, 10, 23, 25, 30, 42, 45, 47, 50], "frame": [7, 11, 12, 13, 14, 23, 30, 33, 45, 50], "plate": [7, 8, 23, 30, 41, 45, 50], "continuum": [7, 23, 30, 50], "mix": [7, 46], "structur": 7, "ar": [8, 9, 10, 15, 16, 17, 25, 29, 30, 33, 38, 42, 45, 46, 47], "packag": [8, 9, 10, 15, 16, 17], "To": [8, 9, 10, 15, 16, 17, 38], "run": [8, 9, 10, 15, 16, 17], "specif": [8, 9, 10, 15, 16, 17, 38, 42], "g": [8, 9, 10, 15, 16, 17, 38, 42, 47], "femedu": [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46, 47, 48, 49], "import": [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], "beam01": 8, "ex": [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], "examplebeam01": 8, "doc": [8, 9, 10, 15, 16, 17, 48], "actual": [8, 9, 10, 15, 16, 17, 42], "problem": [8, 9, 10, 15, 16, 17, 50], "singl": [8, 10, 26, 30, 35, 37, 38, 49], "span": 8, "beam02": 8, "three": 8, "continu": [8, 23, 50], "more": [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 30, 47], "solid": [9, 30], "solid01": 9, "examplesolid01": 9, "wip": [9, 15, 16], "frame01": 10, "exampleframe01": [10, 11], "later": [10, 38, 47], "column": [10, 45], "rotat": [10, 25, 33, 38], "invari": 10, "frame03": 10, "stori": 10, "build": [10, 46], "frame04": 10, "multi": [10, 23, 50], "buckl": [11, 12, 13, 14], "mode": [11, 12, 13, 14, 23, 38, 46, 47, 50], "frame02": 12, "exampleframe02": 12, "exampleframe03": 13, "exampleframe04": 14, "mixed01": 15, "examplemixed01": 15, "plate01": 16, "exampleplate01": 16, "truss01": 17, "exampletruss01": [17, 18], "basic": [17, 23, 50], "triangl": [17, 23, 30, 50], "truss02": 17, "simpl": [17, 27, 30], "static": 17, "determin": [17, 47], "bridg": 17, "truss03": 17, "explor": 17, "altern": 17, "format": [17, 29, 42, 43, 44, 47], "truss04": 17, "3d": [17, 23, 42, 43, 49, 50], "diagram": [19, 23, 42, 47, 50], "exampletruss02": 19, "exampletruss03": 20, "exampletruss04": 21, "peter": [22, 23, 50], "mackenzi": [22, 23, 50], "helnwein": [22, 23, 50], "research": 22, "associ": [22, 47], "professor": 22, "dept": 22, "civil": 22, "environment": 22, "engin": 22, "univers": 22, "washington": 22, "seattl": 22, "unit": [22, 42], "lead": 22, "tatsuhiko": 22, "sweet": 22, "ph": 22, "candid": 22, "william": 22, "galik": 22, "iuss": 22, "pavia": 22, "itali": 22, "jordan": 22, "seawright": 22, "graduat": 22, "2023": [22, 23, 50], "framework": [23, 50], "design": [23, 50], "higher": [23, 50], "educ": [23, 50], "mind": [23, 50], "easi": [23, 50], "integr": [23, 41, 45, 50], "ani": [23, 30, 38, 46, 47, 50], "python": [23, 50], "environ": [23, 50], "linear": [23, 24, 25, 27, 33, 37, 45, 46, 50], "spring": [23, 50], "nuumer": [23, 50], "fe": [23, 50], "quadrilater": [23, 50], "geometr": [23, 50], "physic": [23, 50], "nonlinear": [23, 34, 37, 50], "fiber": [23, 31, 32, 50], "metal": [23, 50], "j_2": [23, 50], "plastic": [23, 40, 50], "harden": [23, 50], "plane": [23, 25, 33, 39, 40, 41, 45, 50], "newton": [23, 24, 46, 50], "raphson": [23, 24, 46, 50], "control": [23, 37, 50], "pattern": [23, 30, 38, 46, 47, 50], "arc": [23, 50], "length": [23, 42, 50], "built": [23, 32, 41, 50], "defin": [23, 25, 30, 38, 41, 42, 48, 50], "moment": [23, 25, 27, 32, 33, 41, 42, 47, 50], "shear": [23, 25, 33, 42, 47, 50], "histori": [23, 26, 47, 50], "solut": [23, 37, 42, 50], "algorithm": [23, 50], "gener": [23, 30, 36, 38, 46, 50], "move": [23, 50], "public": [23, 50], "repositori": [23, 50], "03": [23, 50], "02": [23, 50], "13": [23, 50], "31": [23, 50], "06": [23, 50], "stabil": [23, 46, 47, 50], "09": [23, 50], "ad": [23, 50], "48": [23, 50], "52": [23, 50], "class": [24, 41], "inherit": [24, 34, 37, 42], "deriv": 24, "beam2d": [24, 30], "frame2d": [24, 30], "lineartriangl": [24, 30], "fibermateri": [24, 32, 36], "planestress": [24, 36, 41], "planestrain": [24, 36], "plotter3d": [24, 42], "elementplott": [24, 42], "elementplotter3d": [24, 42], "transform": [24, 30, 38], "nodei": [25, 33, 49], "nodej": [25, 33, 49], "assumpt": [25, 33, 34], "along": 25, "axi": [25, 29, 38, 42, 43, 44], "ignor": 25, "small": [25, 33], "navier": [25, 33], "bernoulli": [25, 33], "euler": [25, 33], "rigid": [25, 33], "futur": [25, 33, 46], "releas": [25, 33, 46], "ui": [25, 33, 38, 49], "theta": [25, 33], "rz": [25, 33, 38], "tupl": [25, 30, 33, 38, 47, 49], "_v_": [25, 33], "_m_": [25, 33], "getinternalforc": [25, 33], "normal": [25, 33], "locat": [25, 33], "ndarrai": [25, 33, 38, 47], "which": [25, 29, 30, 33, 42, 43, 44, 47, 48], "interv": [25, 33], "resetload": [25, 30, 33, 38, 47], "setdistload": 25, "w": [25, 49], "uniform": 25, "direct": [25, 38], "updatest": [25, 30, 31, 33, 35, 40, 49], "domain": [26, 38, 47, 48], "str": [26, 29, 42, 43, 44, 47], "nodeid": 26, "statu": 26, "bool": [26, 38], "record": [26, 47], "whether": [26, 34], "implement": [27, 29, 30, 32, 33, 38, 41, 42, 46, 50], "relat": 27, "ea": 27, "qquad": [27, 32, 41], "ei": 27, "phi": [27, 32], "where": [27, 30, 32, 40, 41, 46, 47], "result": [27, 32, 34, 41, 47], "output": [27, 32, 38, 41, 42], "curvatur": [27, 32, 41], "constant": 27, "flexur": [27, 32, 41, 45], "take": 29, "mesh": [29, 47], "potenti": 29, "shade": 29, "specifi": [29, 38, 47, 48], "variabl": [29, 42, 47], "obtain": [29, 34, 41], "standard": 29, "version": 29, "those": [29, 30, 42], "overload": [29, 46], "addforc": [29, 42, 43, 44], "ax": [29, 42, 43, 44], "shown": [29, 42, 43, 44, 47], "beamvalueplot": [29, 42, 47], "variable_nam": [29, 42], "filenam": [29, 42, 43, 44, 47], "show_arrow": 29, "kwarg": [29, 30, 34, 37, 38, 44, 46, 47], "store": [29, 38, 42, 43, 44, 47], "proper": [29, 42, 43, 44, 47], "extens": [29, 42, 43, 44, 47], "desir": [29, 42, 43, 44, 47], "png": [29, 42, 43, 44, 47], "pdf": [29, 42, 43, 44, 47], "code": [29, 30, 38, 42, 47], "scale": [29, 42, 47], "modeshap": [29, 30, 38], "setreact": [29, 42, 44], "identifi": [29, 42, 43, 44], "magnitud": [29, 42, 43, 44], "particular": 30, "rather": 30, "common": [30, 38], "fem": 30, "edu": 30, "drawel": [30, 42], "declar": 30, "element_typ": 30, "mechan": 30, "work": [30, 37, 42], "unknown": 30, "mean": 30, "see": [30, 38, 46], "below": [30, 47], "detail": 30, "abstract": [30, 36, 42, 46], "addtransform": [30, 38], "t": [30, 38, 39, 40], "local_nod": 30, "attach": [30, 38, 48], "empti": 30, "hand": [30, 47], "appli": [30, 38, 46, 47, 48], "non": 30, "go": 30, "number": [30, 37], "remov": 30, "assign": [30, 47], "getdof": 30, "driven": 30, "onli": [30, 37, 46], "apply_load_factor": [30, 38, 46], "like": 30, "surfac": 30, "bodi": 30, "reset": [30, 33, 46, 47], "setloadfactor": [30, 38, 46, 47], "lam": [30, 38, 46, 47], "target": [30, 38, 46, 47], "instead": [30, 38, 47], "enter": [30, 38, 46, 47], "consid": [30, 38, 46, 47], "refer": [30, 34, 37, 38, 46, 47], "multipli": [30, 38, 46, 47], "scalar": [30, 38, 46, 47], "lambda": [30, 38, 46, 47], "explicitli": [30, 38, 46, 47], "assum": [30, 34, 38, 46, 47], "entir": [30, 38, 45, 46, 47], "full": [30, 37, 38, 46, 47], "draw": 30, "curv": 30, "nice": 30, "shell": [30, 45], "tetrahedron": 30, "quad": 30, "brick": 30, "seri": 30, "_x_": 30, "_y_": 30, "_z_": 30, "For": 30, "magnif": [30, 38, 42, 47], "drawbrick": 30, "drawcurv": 30, "drawlin": 30, "drawquad": 30, "drawtetrahedron": 30, "drawtriangl": 30, "1e": [31, 36, 39, 40, 45], "30": [31, 36, 39, 40, 45], "tensor": [31, 36, 39, 40, 41], "yet": [32, 41], "avail": [32, 41], "complex": [32, 41], "multipl": [32, 41], "z": [32, 38, 41, 42], "varepsilon_0": 32, "int_a": 32, "da": 32, "df": 32, "mathcal": [32, 41], "c": [32, 40, 41], "mathbb": [32, 41], "dm": [32, 41], "b": [32, 41], "distanc": [32, 41], "coupl": [32, 41, 45], "moder": 33, "ux": [33, 38, 49], "_f_": 33, "linearsolv": 34, "impli": 34, "force_onli": [34, 37, 46], "pushstat": [34, 37, 46], "push": [34, 37, 38, 46, 47], "data": [34, 37, 46, 47], "requir": [34, 37, 38, 42, 46], "pref": [34, 37, 46], "u1": [34, 37, 46], "converg": [34, 37, 46], "un": [34, 37, 46], "previou": [34, 37, 46], "lam1": [34, 37, 46], "level": [34, 37, 46, 47], "lamn": [34, 37, 46], "total": [34, 40], "verifi": 34, "correct": 34, "out": [34, 46], "equilibrium": 34, "experi": 34, "behavior": 34, "under": 34, "node2": 35, "iter": 37, "newtonraphsonsolv": 37, "getresiduum": 37, "redesign": 37, "TO": [37, 38], "WITH": 37, "smart": 37, "max_step": 37, "verbos": [37, 46], "maximum": 37, "addit": [37, 42], "solvesinglestep": 37, "helper": 37, "perform": [37, 41, 46], "x0": 38, "y0": 38, "z0": 38, "prescrib": 38, "furthermor": 38, "veloc": 38, "acceler": 38, "arefix": 38, "routin": 38, "num_dof": 38, "restrain": 38, "also": 38, "caller": 38, "adjust": 38, "dure": 38, "nd": 38, "sequenc": 38, "same": 38, "order": 38, "dof_list": 38, "exist": 38, "forget": 38, "definit": 38, "kei": 38, "hasload": 38, "popu": [38, 47], "restor": [38, 47], "previous": [38, 47], "pushu": [38, 47], "individu": 38, "uz": [38, 49], "rx": 38, "about": [38, 50], "ry": 38, "usual": 38, "sent": 38, "resetal": [38, 47], "resetdisp": [38, 47], "BE": 38, "left": 40, "begin": 40, "s_": 40, "xx": 40, "yy": 40, "xy": 40, "right": 40, "ccc": 40, "e_": 40, "2e_": 40, "ij": [40, 41], "varepsilon_": 41, "kl": 41, "0_": 41, "phi_": 41, "int_": 41, "h": 41, "dz": 41, "layer": 41, "thick": 41, "sum": 41, "further": 41, "dn": 41, "ijkl": 41, "membran": 41, "fundament": 42, "featur": 42, "In": 42, "abstractplott": 42, "tradit": [42, 47], "link": 42, "get": [42, 47], "them": 42, "set_axes_equ": 42, "make": 42, "equal": 42, "sphere": 42, "appear": 42, "cube": 42, "etc": 42, "possibl": 42, "matplotlib": 42, "set_aspect": 42, "plt": 42, "gca": 42, "sourc": 42, "http": 42, "stackoverflow": 42, "com": 42, "question": 42, "13685386": 42, "aspect": 42, "perpendicular": 45, "middl": 45, "That": 45, "directli": [45, 47], "without": 45, "sectionmateri": 45, "elasticsect": 45, "fibersect": 45, "platesect": 45, "interfac": 46, "describ": 46, "balanc": 46, "residuum": 46, "_t": 46, "most": 46, "special": 46, "while": 46, "awar": 46, "thei": 46, "ask": 46, "explic": 46, "pass": 46, "access": [46, 47], "residu": 46, "checkstabl": 46, "mathop": 46, "det": 46, "less": 46, "than": 46, "25": 46, "min": 46, "lambda_i": 46, "eigenvalu": [46, 47], "log": 46, "num_eigen": 46, "greater": 46, "closest": 46, "fetchstat": 46, "fetch": 46, "getbucklingmod": 46, "eigen": 46, "smallest": [46, 47], "absolut": [46, 47], "plotbucklingmod": [46, 47], "eigenmod": 46, "lambda_": 46, "mathtt": 46, "resetdisplac": 46, "resetforc": 46, "newel": 47, "fetchrecord": 47, "loadfactor": 47, "getsolv": 47, "give": 47, "instruct": 47, "initrecord": 47, "gather": 47, "been": 47, "mark": 47, "deprec": 47, "appropri": 47, "select": 47, "integ": 47, "stand": 47, "second": 47, "forth": 47, "neg": 47, "buckling_mod": 47, "here": 47, "These": 47, "plotdof": 47, "plotsystem": 47, "recordthisstep": 47, "setsolv": 47, "upon": 47, "success": 47, "old": 47, "new": 47, "startrecord": 47, "stoprecord": 47, "stop": 47, "contour": 47, "when": 48, "dode": 48, "getaxialforc": 49, "tension": 49, "develop": 50, "program": 50, "modul": 50, "search": 50, "page": 50}, "objects": {"femedu.domain": [[26, 0, 0, "-", "DoF"], [38, 0, 0, "-", "Node"], [47, 0, 0, "-", "System"], [48, 0, 0, "-", "Transformation"]], "femedu.domain.DoF": [[26, 1, 1, "", "DoF"]], "femedu.domain.Node": [[38, 1, 1, "", "Node"]], "femedu.domain.Node.Node": [[38, 2, 1, "", "addLoad"], [38, 2, 1, "", "addTransformation"], [38, 2, 1, "", "areFixed"], [38, 2, 1, "", "fixDOF"], [38, 2, 1, "", "getDeformedPos"], [38, 2, 1, "", "getDisp"], [38, 2, 1, "", "getLoad"], [38, 2, 1, "", "getPos"], [38, 2, 1, "", "hasLoad"], [38, 2, 1, "", "isFixed"], [38, 2, 1, "", "popU"], [38, 2, 1, "", "pushU"], [38, 2, 1, "", "request"], [38, 2, 1, "", "resetAll"], [38, 2, 1, "", "resetDisp"], [38, 2, 1, "", "resetLoad"], [38, 2, 1, "", "setDisp"], [38, 2, 1, "", "setLoad"], [38, 2, 1, "", "setLoadFactor"]], "femedu.domain.System": [[47, 1, 1, "", "System"]], "femedu.domain.System.System": [[47, 2, 1, "", "addElement"], [47, 2, 1, "", "addNode"], [47, 2, 1, "", "beamValuePlot"], [47, 2, 1, "", "fetchRecord"], [47, 2, 1, "", "getSolver"], [47, 2, 1, "", "initRecorder"], [47, 2, 1, "", "plot"], [47, 2, 1, "", "plotBucklingMode"], [47, 2, 1, "", "plotDOF"], [47, 2, 1, "", "plotSystem"], [47, 2, 1, "", "popU"], [47, 2, 1, "", "pushU"], [47, 2, 1, "", "recordThisStep"], [47, 2, 1, "", "report"], [47, 2, 1, "", "resetAll"], [47, 2, 1, "", "resetDisp"], [47, 2, 1, "", "resetLoad"], [47, 2, 1, "", "setLoadFactor"], [47, 2, 1, "", "setSolver"], [47, 2, 1, "", "solve"], [47, 2, 1, "", "startRecorder"], [47, 2, 1, "", "stopRecorder"], [47, 2, 1, "", "valuePlot"]], "femedu.domain.Transformation": [[48, 1, 1, "", "Transformation"]], "femedu.elements": [[25, 0, 0, "-", "Beam2D"], [30, 0, 0, "-", "DrawElement"], [30, 0, 0, "-", "Element"], [33, 0, 0, "-", "Frame2D"], [35, 0, 0, "-", "LinearTriangle"], [49, 0, 0, "-", "Truss"]], "femedu.elements.Beam2D": [[25, 1, 1, "", "Beam2D"]], "femedu.elements.Beam2D.Beam2D": [[25, 2, 1, "", "getInternalForce"], [25, 2, 1, "", "resetLoads"], [25, 2, 1, "", "setDistLoad"], [25, 2, 1, "", "updateState"]], "femedu.elements.DrawElement": [[30, 1, 1, "", "DrawElement"]], "femedu.elements.DrawElement.DrawElement": [[30, 2, 1, "", "draw"], [30, 2, 1, "", "drawBrick"], [30, 2, 1, "", "drawCurve"], [30, 2, 1, "", "drawLine"], [30, 2, 1, "", "drawQuad"], [30, 2, 1, "", "drawTetrahedron"], [30, 2, 1, "", "drawTriangle"]], "femedu.elements.Element": [[30, 1, 1, "", "Element"]], "femedu.elements.Element.Element": [[30, 2, 1, "", "addTransformation"], [30, 2, 1, "", "getDofs"], [30, 2, 1, "", "getForce"], [30, 2, 1, "", "getLoad"], [30, 2, 1, "", "getStiffness"], [30, 2, 1, "", "resetLoads"], [30, 2, 1, "", "setLoadFactor"], [30, 2, 1, "", "updateState"]], "femedu.elements.Frame2D": [[33, 1, 1, "", "Frame2D"]], "femedu.elements.Frame2D.Frame2D": [[33, 2, 1, "", "getInternalForce"], [33, 2, 1, "", "resetLoads"], [33, 2, 1, "", "updateState"]], "femedu.elements.LinearTriangle": [[35, 1, 1, "", "LinearTriangle"]], "femedu.elements.LinearTriangle.LinearTriangle": [[35, 2, 1, "", "updateState"]], "femedu.elements.Truss": [[49, 1, 1, "", "Truss"]], "femedu.elements.Truss.Truss": [[49, 2, 1, "", "getAxialForce"], [49, 2, 1, "", "updateState"]], "femedu.materials": [[27, 0, 0, "-", "ElasticSection"], [31, 0, 0, "-", "FiberMaterial"], [36, 0, 0, "-", "Material"], [39, 0, 0, "-", "PlaneStrain"], [40, 0, 0, "-", "PlaneStress"], [45, 0, 0, "-", "SectionMaterial"]], "femedu.materials.ElasticSection": [[27, 1, 1, "", "ElasticSection"]], "femedu.materials.FiberMaterial": [[31, 1, 1, "", "FiberMaterial"]], "femedu.materials.FiberMaterial.FiberMaterial": [[31, 2, 1, "", "updateState"]], "femedu.materials.Material": [[36, 1, 1, "", "Material"]], "femedu.materials.Material.Material": [[36, 2, 1, "", "getStiffness"], [36, 2, 1, "", "getStress"], [36, 2, 1, "", "setStrain"]], "femedu.materials.PlaneStrain": [[39, 1, 1, "", "PlaneStrain"]], "femedu.materials.PlaneStrain.PlaneStrain": [[39, 2, 1, "", "setStrain"]], "femedu.materials.PlaneStress": [[40, 1, 1, "", "PlaneStress"]], "femedu.materials.PlaneStress.PlaneStress": [[40, 2, 1, "", "updateState"]], "femedu.materials.SectionMaterial": [[45, 1, 1, "", "SectionMaterial"]], "femedu.plotter": [[42, 0, 0, "-", "AbstractPlotter"], [29, 0, 0, "-", "ElementPlotter"], [28, 0, 0, "-", "ElementPlotter3D"], [44, 0, 0, "-", "Plotter"], [43, 0, 0, "-", "Plotter3D"]], "femedu.plotter.AbstractPlotter": [[42, 1, 1, "", "AbstractPlotter"]], "femedu.plotter.AbstractPlotter.AbstractPlotter": [[42, 2, 1, "", "addForces"], [42, 2, 1, "", "beamValuePlot"], [42, 2, 1, "", "displacementPlot"], [42, 2, 1, "", "setDisplacements"], [42, 2, 1, "", "setMesh"], [42, 2, 1, "", "setReactions"], [42, 2, 1, "", "setValues"], [42, 2, 1, "", "set_axes_equal"], [42, 2, 1, "", "valuePlot"]], "femedu.plotter.ElementPlotter": [[29, 1, 1, "", "ElementPlotter"]], "femedu.plotter.ElementPlotter.ElementPlotter": [[29, 2, 1, "", "addForces"], [29, 2, 1, "", "beamValuePlot"], [29, 2, 1, "", "displacementPlot"], [29, 2, 1, "", "setReactions"], [29, 2, 1, "", "valuePlot"]], "femedu.plotter.ElementPlotter3D": [[28, 1, 1, "", "ElementPlotter3D"]], "femedu.plotter.Plotter": [[44, 1, 1, "", "Plotter"]], "femedu.plotter.Plotter.Plotter": [[44, 2, 1, "", "addForces"], [44, 2, 1, "", "displacementPlot"], [44, 2, 1, "", "setDisplacements"], [44, 2, 1, "", "setMesh"], [44, 2, 1, "", "setReactions"], [44, 2, 1, "", "setValues"], [44, 2, 1, "", "valuePlot"]], "femedu.plotter.Plotter3D": [[43, 1, 1, "", "Plotter3d"]], "femedu.plotter.Plotter3D.Plotter3d": [[43, 2, 1, "", "addForces"], [43, 2, 1, "", "displacementPlot"], [43, 2, 1, "", "valuePlot"]], "femedu.solver": [[34, 0, 0, "-", "LinearSolver"], [37, 0, 0, "-", "NewtonRaphsonSolver"], [46, 0, 0, "-", "Solver"]], "femedu.solver.LinearSolver": [[34, 1, 1, "", "LinearSolver"]], "femedu.solver.LinearSolver.LinearSolver": [[34, 2, 1, "", "assemble"], [34, 2, 1, "", "pushState"], [34, 2, 1, "", "solve"]], "femedu.solver.NewtonRaphsonSolver": [[37, 1, 1, "", "NewtonRaphsonSolver"]], "femedu.solver.NewtonRaphsonSolver.NewtonRaphsonSolver": [[37, 2, 1, "", "assemble"], [37, 2, 1, "", "getResiduum"], [37, 2, 1, "", "pushState"], [37, 2, 1, "", "solve"], [37, 2, 1, "", "solveSingleStep"]], "femedu.solver.Solver": [[46, 1, 1, "", "Solver"]], "femedu.solver.Solver.Solver": [[46, 2, 1, "", "assemble"], [46, 2, 1, "", "checkStability"], [46, 2, 1, "", "fetchState"], [46, 2, 1, "", "getBucklingMode"], [46, 2, 1, "", "initialize"], [46, 2, 1, "", "pushState"], [46, 2, 1, "", "reset"], [46, 2, 1, "", "resetDisplacements"], [46, 2, 1, "", "resetForces"], [46, 2, 1, "", "setLoadFactor"], [46, 2, 1, "", "solve"]]}, "objtypes": {"0": "py:module", "1": "py:class", "2": "py:method"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "class", "Python class"], "2": ["py", "method", "Python method"]}, "titleterms": {"program": 0, "design": 0, "element": [1, 2, 30], "class": [1, 2, 3, 4, 5, 6, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46, 47, 48, 49], "method": [1, 2, 3, 4, 5, 6, 30], "variabl": [1, 2, 3, 4, 5, 6, 25, 33, 49], "materi": [2, 31, 36, 39, 40, 45], "node": [3, 38], "plotter": [4, 44], "solver": [5, 34, 37, 46], "system": [5, 6, 47], "exampl": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], "problem": 7, "beam": 8, "avail": [8, 9, 10, 15, 16, 17], "continuum": 9, "frame": 10, "frame01": [11, 12], "frame03": 13, "frame04": 14, "mix": 15, "structur": 15, "plate": 16, "truss": [17, 49], "truss01": 18, "truss02": 19, "truss03": 20, "truss04": 21, "about": 22, "develop": 22, "welcom": [23, 50], "fem": [23, 50], "edu": [23, 50], "document": [23, 50], "featur": [23, 50], "revis": [23, 50], "log": [23, 50], "implement": 24, "beam2d": 25, "parent": [25, 27, 28, 29, 31, 32, 33, 34, 35, 37, 39, 40, 43, 44, 45, 49], "doc": [25, 28, 29, 31, 33, 34, 35, 37, 39, 40, 43, 44, 49], "intern": [25, 33, 49], "dof": 26, "elasticsect": 27, "elementplotter3d": 28, "elementplott": 29, "inherit": 30, "deriv": [30, 36, 42, 45, 46], "fibermateri": 31, "fibersect": 32, "frame2d": 33, "linear": 34, "state": [34, 37, 46], "i": [34, 37, 46], "defin": [34, 37, 46], "dictionari": [34, 37, 46], "follow": [34, 37, 46], "content": [34, 37, 46, 50], "lineartriangl": 35, "newton": 37, "raphson": 37, "planestrain": 39, "planestress": 40, "platesect": 41, "plot": 42, "support": 42, "plotter3d": 43, "section": 45, "transform": 48, "indic": 50, "tabl": 50}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 56}})