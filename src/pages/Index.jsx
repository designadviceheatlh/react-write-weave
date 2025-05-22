import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TextEditor from '@/components/TextEditor';
import { useState } from 'react';

const Index = () => {
  const [editorValue, setEditorValue] = useState({
    content: '',
    html: ''
  });

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-4xl">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Editor de Texto</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="editor" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="editor">Editor</TabsTrigger>
                <TabsTrigger value="preview">Visualização HTML</TabsTrigger>
              </TabsList>
              
              <TabsContent value="editor">
                <TextEditor 
                  onChange={setEditorValue}
                  initialValue={`<p>Procedimentos Favoráveis</p>
<p>Rigidez, reforçamento ou reforço do ligamento cruzado anterior ou posterior # - procedimento videoartroscópico de joelho ou sutura de um menisco - procedimento videoartroscópico de joelho</p>
<p>artroplastia - estabilização, ressecção e/ou plastia # - procedimento videoartroscópico de joelho ligamentares periféricas crônicas - tratamento cirúrgico</p>
<h3>Procedimentos Desfavoráveis</h3>
<p>1. 30731119 - Tenoplastia / enxerto de tendão - tratamento cirúrgico</p>`}
                />
              </TabsContent>
              
              <TabsContent value="preview">
                <Card>
                  <CardContent className="p-4">
                    <pre className="whitespace-pre-wrap text-sm font-mono bg-slate-100 p-4 rounded-md overflow-auto max-h-[500px]">
                      {editorValue.html}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;