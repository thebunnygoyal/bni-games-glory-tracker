
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { weeklyDataSchema, WeeklyDataInput } from '../lib/validation';
import { canSubmitData } from '../lib/auth';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { toast } from './ui/use-toast';
import { Calendar, Send } from 'lucide-react';

const WeeklyDataForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<WeeklyDataInput>({
    resolver: zodResolver(weeklyDataSchema),
    defaultValues: {
      chapterName: '',
      week: 1,
      referrals: 0,
      visitors: 0,
      attendance: 0,
      testimonials: 0,
      trainings: 0
    }
  });

  if (!canSubmitData()) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-700">You don't have permission to submit weekly data. Only captains can submit data.</p>
      </div>
    );
  }

  const onSubmit = async (data: WeeklyDataInput) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Submitting weekly data:', data);
      
      toast({
        title: "Data Submitted Successfully",
        description: `Week ${data.week} data for ${data.chapterName} has been submitted.`,
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <Calendar className="w-6 h-6 text-red-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-800">Submit Weekly Data</h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="chapterName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Chapter Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter chapter name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="week"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Week Number</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      min="1" 
                      max="52" 
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="referrals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Referrals</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      min="0" 
                      max="1000" 
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="visitors"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Visitors</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      min="0" 
                      max="500" 
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="attendance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Attendance (%)</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      min="0" 
                      max="100" 
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="testimonials"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Testimonials</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      min="0" 
                      max="10" 
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="trainings"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Trainings</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      min="0" 
                      max="10" 
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-red-600 hover:bg-red-700"
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Submit Data
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default WeeklyDataForm;
