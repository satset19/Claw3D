# Blender headless export: .blend -> .glb (Draco), YUP, +Z forward.
# Usage: blender -b -P scripts/avatars/export_blend_to_glb.py -- <in.blend> <out.glb>
import bpy, sys, os

argv = sys.argv[sys.argv.index("--") + 1 :]
in_path, out_path = argv[0], argv[1]

bpy.ops.wm.open_mainfile(filepath=in_path)

# Make sure every object is included in the export.
for o in bpy.data.objects:
    o.hide_viewport = False
    o.hide_render = False
    o.hide_set(False)

os.makedirs(os.path.dirname(out_path), exist_ok=True)

bpy.ops.export_scene.gltf(
    filepath=out_path,
    export_format="GLB",
    export_apply=True,
    export_yup=True,
    export_draco_mesh_compression_enable=True,
    export_draco_mesh_compression_level=6,
    export_animations=True,
    export_skins=True,
    export_morph=False,
    export_cameras=False,
    export_lights=False,
)

print("OK", out_path, os.path.getsize(out_path))
